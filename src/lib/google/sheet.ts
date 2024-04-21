import { google } from "googleapis";
import { auth } from "./auth";

export async function getSheetData(spreadsheetId: string, range: string) {
  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values;
}
