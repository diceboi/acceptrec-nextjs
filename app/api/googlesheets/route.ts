import { google } from 'googleapis';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const { firstname, lastname, tel, email, zip, file, path, policy, uniquetitle, workname } = body;

      console.log("Received data:", { firstname, lastname, tel, email, zip, file, path, policy, uniquetitle, workname });

      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined;
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;

      if (!clientEmail || !privateKey || !spreadsheetId) {
        throw new Error('Missing required environment variables');
      }

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: 'Munkalap1!A2', // Adjust the range as per your sheet structure
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [firstname, lastname, tel, email, zip, file, path, policy, uniquetitle, workname],
          ],
        },
      });

      console.log("API Response:", response.data);
      return NextResponse.json({ message: 'Success', data: response.data });

    } catch (error) {
      console.error('Error appending data to Google Sheets:', error);
      return NextResponse.json({ error: 'Internal Server Error' });
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' });
  }
}
