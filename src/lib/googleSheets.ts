import { google } from 'googleapis';

/**
 * Initializes and returns authenticated Google Sheets client
 */
function getGoogleSheetsClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

/**
 * Appends a new row to the Google Sheet
 */
export async function appendRowToSheet(
  name: string,
  count: number
): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    throw new Error('Google Sheet ID not configured');
  }

  const sheets = getGoogleSheetsClient();
  // Format date as YYYY-MM-DD
  const date = new Date().toISOString().split('T')[0];

  // Use environment variable for sheet range, default to 'Sheet1!A:C'
  // Users can set GOOGLE_SHEET_RANGE to 'Responses!A:C' or any other sheet name
  const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:C';

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[date, name, count]],
      },
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'message' in error) {
      const errorMessage = String(error.message);
      if (errorMessage.includes('Unable to parse range')) {
        throw new Error(
          `Sheet not found. Please ensure your spreadsheet has a sheet named "${range.split('!')[0]}" or set GOOGLE_SHEET_RANGE environment variable to match your sheet name.`
        );
      }
    }
    throw error;
  }
}
