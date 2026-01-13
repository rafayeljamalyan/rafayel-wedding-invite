import { appendRowToSheet } from '../googleSheets';
import { google } from 'googleapis';

// Mock googleapis
jest.mock('googleapis');

const mockAppend = jest.fn();
const mockSheetsInstance = {
  spreadsheets: {
    values: {
      append: mockAppend,
    },
  },
};

describe('Google Sheets Utility', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Set up environment variables
    process.env = {
      ...originalEnv,
      GOOGLE_SHEETS_PRIVATE_KEY: 'test-private-key',
      GOOGLE_SHEETS_CLIENT_EMAIL: 'test@example.com',
      GOOGLE_SHEET_ID: 'test-sheet-id',
    };

    // Mock google.sheets to return our mock instance
    (google.sheets as jest.Mock).mockReturnValue(mockSheetsInstance);
    
    // Mock google.auth.GoogleAuth
    (google.auth.GoogleAuth as jest.Mock) = jest.fn().mockImplementation(() => ({
      getClient: jest.fn().mockResolvedValue({}),
    }));
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('appendRowToSheet', () => {
    it('should append row with correct data structure', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('John Doe', 3);

      expect(mockAppend).toHaveBeenCalledTimes(1);
      const callArgs = mockAppend.mock.calls[0][0];
      
      expect(callArgs.spreadsheetId).toBe('test-sheet-id');
      expect(callArgs.range).toBe('Sheet1!A:C');
      expect(callArgs.valueInputOption).toBe('USER_ENTERED');
      expect(callArgs.insertDataOption).toBe('INSERT_ROWS');
      
      // Check that the values array has the correct structure
      expect(callArgs.requestBody.values).toHaveLength(1);
      expect(callArgs.requestBody.values[0]).toHaveLength(3);
      
      // Check date is in YYYY-MM-DD format
      const [date, name, count] = callArgs.requestBody.values[0];
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(name).toBe('John Doe');
      expect(count).toBe(3);
    });

    it('should use credentials from environment variables', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('Test User', 2);

      expect(google.auth.GoogleAuth).toHaveBeenCalledWith({
        credentials: {
          client_email: 'test@example.com',
          private_key: 'test-private-key',
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    });

    it('should throw error if GOOGLE_SHEETS_PRIVATE_KEY is missing', async () => {
      delete process.env.GOOGLE_SHEETS_PRIVATE_KEY;

      await expect(appendRowToSheet('Test', 1)).rejects.toThrow(
        'Google Sheets credentials not configured'
      );
    });

    it('should throw error if GOOGLE_SHEETS_CLIENT_EMAIL is missing', async () => {
      delete process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

      await expect(appendRowToSheet('Test', 1)).rejects.toThrow(
        'Google Sheets credentials not configured'
      );
    });

    it('should throw error if GOOGLE_SHEET_ID is missing', async () => {
      delete process.env.GOOGLE_SHEET_ID;

      await expect(appendRowToSheet('Test', 1)).rejects.toThrow(
        'Google Sheet ID not configured'
      );
    });

    it('should handle Armenian characters correctly', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('Արամ Խաչատրյան', 5);

      const callArgs = mockAppend.mock.calls[0][0];
      expect(callArgs.requestBody.values[0][1]).toBe('Արամ Խաչատրյան');
    });

    it('should handle count of 1', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('Solo Guest', 1);

      const callArgs = mockAppend.mock.calls[0][0];
      expect(callArgs.requestBody.values[0][2]).toBe(1);
    });

    it('should handle count of 20', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('Large Party', 20);

      const callArgs = mockAppend.mock.calls[0][0];
      expect(callArgs.requestBody.values[0][2]).toBe(20);
    });

    it('should propagate API errors', async () => {
      const apiError = new Error('API Error');
      mockAppend.mockRejectedValueOnce(apiError);

      await expect(appendRowToSheet('Test', 2)).rejects.toThrow('API Error');
    });

    it('should generate date at call time', async () => {
      mockAppend.mockResolvedValueOnce({ data: {} });
      
      const today = new Date().toISOString().split('T')[0];
      await appendRowToSheet('Test', 2);

      const callArgs = mockAppend.mock.calls[0][0];
      const date = callArgs.requestBody.values[0][0];
      
      expect(date).toBe(today);
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should use custom range from environment variable', async () => {
      process.env.GOOGLE_SHEET_RANGE = 'Responses!A:C';
      mockAppend.mockResolvedValueOnce({ data: {} });

      await appendRowToSheet('Test User', 3);

      const callArgs = mockAppend.mock.calls[0][0];
      expect(callArgs.range).toBe('Responses!A:C');
    });

    it('should throw helpful error when sheet range is invalid', async () => {
      process.env.GOOGLE_SHEET_RANGE = 'NonExistent!A:C';
      const error = new Error('Unable to parse range: NonExistent!A:C');
      mockAppend.mockRejectedValueOnce(error);

      await expect(appendRowToSheet('Test', 1)).rejects.toThrow(
        'Sheet not found. Please ensure your spreadsheet has a sheet named "NonExistent"'
      );
    });
  });
});
