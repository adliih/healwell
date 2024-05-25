import fs from "fs/promises";
import path from "path";
import process from "process";
import { authenticate } from "@google-cloud/local-auth";
import { google } from "googleapis";

// If modifying these scopes, delete token.json.
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

const serviceAccountKey: { private_key: string; client_email: string } =
  JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "");
const key = serviceAccountKey?.private_key;
const email = serviceAccountKey?.client_email;

export const auth = new google.auth.JWT({
  key,
  email,
  scopes,
});
