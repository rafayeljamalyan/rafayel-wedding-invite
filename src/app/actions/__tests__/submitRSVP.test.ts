import { submitRSVP } from '../submitRSVP';
import { appendRowToSheet } from '@/lib/googleSheets';

// Mock the Google Sheets module
jest.mock('@/lib/googleSheets');

const mockAppendRowToSheet = appendRowToSheet as jest.MockedFunction<
  typeof appendRowToSheet
>;

describe('submitRSVP Server Action', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset console.error mock to avoid noise in tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Validation', () => {
    it('should reject empty name', async () => {
      const result = await submitRSVP({ name: '', count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անունը պարտադիր է');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });

    it('should reject name with only whitespace', async () => {
      const result = await submitRSVP({ name: '   ', count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անունը պարտադիր է');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });

    it('should reject name longer than 100 characters', async () => {
      const longName = 'a'.repeat(101);
      const result = await submitRSVP({ name: longName, count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անունը չափազանց երկար է');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });

    it('should reject count less than 1', async () => {
      const result = await submitRSVP({ name: 'Test User', count: 0 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անդամների քանակը պետք է լինի առնվազն 1');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });

    it('should reject count greater than 20', async () => {
      const result = await submitRSVP({ name: 'Test User', count: 21 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անդամների քանակը չի կարող գերազանցել 20-ը');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });

    it('should reject non-integer count', async () => {
      const result = await submitRSVP({ name: 'Test User', count: 2.5 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Անդամների քանակը պետք է լինի ամբողջ թիվ');
      }
      expect(mockAppendRowToSheet).not.toHaveBeenCalled();
    });
  });

  describe('Successful submission', () => {
    it('should successfully submit valid data', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);

      const result = await submitRSVP({ name: 'John Doe', count: 2 });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledTimes(1);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith('John Doe', 2);
    });

    it('should trim whitespace from name', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);

      const result = await submitRSVP({ name: '  John Doe  ', count: 2 });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith('John Doe', 2);
    });

    it('should accept Armenian characters in name', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);

      const result = await submitRSVP({
        name: 'Արամ Խաչատրյան',
        count: 5,
      });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith('Արամ Խաչատրյան', 5);
    });

    it('should accept count of 1', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);

      const result = await submitRSVP({ name: 'Solo Guest', count: 1 });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith('Solo Guest', 1);
    });

    it('should accept count of 20', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);

      const result = await submitRSVP({ name: 'Large Party', count: 20 });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith('Large Party', 20);
    });

    it('should accept name exactly 100 characters long', async () => {
      mockAppendRowToSheet.mockResolvedValueOnce(undefined);
      const exactName = 'a'.repeat(100);

      const result = await submitRSVP({ name: exactName, count: 2 });

      expect(result.success).toBe(true);
      expect(mockAppendRowToSheet).toHaveBeenCalledWith(exactName, 2);
    });
  });

  describe('Error handling', () => {
    it('should handle Google Sheets API errors gracefully', async () => {
      const apiError = new Error('API Error');
      mockAppendRowToSheet.mockRejectedValueOnce(apiError);

      const result = await submitRSVP({ name: 'Test User', count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Ուղարկումը ձախողվեց, խնդրում ենք կրկին փորձել');
      }
      expect(console.error).toHaveBeenCalledWith(
        'Error submitting RSVP:',
        apiError
      );
    });

    it('should handle network errors', async () => {
      const networkError = new Error('Network timeout');
      mockAppendRowToSheet.mockRejectedValueOnce(networkError);

      const result = await submitRSVP({ name: 'Test User', count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Ուղարկումը ձախողվեց, խնդրում ենք կրկին փորձել');
      }
    });

    it('should handle unexpected errors', async () => {
      mockAppendRowToSheet.mockRejectedValueOnce(new Error('Unexpected'));

      const result = await submitRSVP({ name: 'Test User', count: 2 });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe('Ուղարկումը ձախողվեց, խնդրում ենք կրկին փորձել');
      }
    });
  });
});
