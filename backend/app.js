import express from "express";
import fs from "fs";
import donorRoutes from "./routes/donorRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import cors from "cors";
import { google } from "googleapis";

const app = express();
let jsonData = [];

// Load client secrets from a local file.
const credentialsPath = "./grainathon-keys.json";
const spreadsheetId = "1ufbvsptEnOdfJYkmj9RpdaDgMWFKDB-RXJuluKQtnGY";
const range = "Sheet1!A2:I"; // Modify the range as needed

// Function to read Google Sheets
const readGoogleSheet = async () => {
  try {
    const auth = await authorize(); // Make sure to wait for the auth initialization
    const client = await auth.getClient(); // Get the authorized client
    const sheets = google.sheets({ version: "v4", auth: client });
    let previousData = [];
    let newData = [];
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows.length) {
      newData = rows.map((row) => ({
        SapID: row[0], // Student ID
        Email: row[1], // Email
        Name: row[2], // Full Name
        PhoneNo: row[3], // Phone Number
        Branch: row[4], // Department
        Rice: row[5], // Quantity
        Wheat: row[6], // Numeric field (Wheat)
        CommitteeName: row[7], // Committee Name
        Money: row[8], // Batch/Money fields
      })),
      jsonData = rows.map((row) => ({
        SapID: row[0], // Student ID
        Email: row[1], // Email
        Name: row[2], // Full Name
        PhoneNo: row[3], // Phone Number
        Branch: row[4], // Department
        Rice: row[5], // Quantity
        Wheat: row[6], // Numeric field (Wheat)
        CommitteeName: row[7], // Committee Name
        Money: row[8], // Batch/Money field
      }));
      if (JSON.stringify(newData) !== JSON.stringify(previousData)) {
        jsonData = newData;
        previousData = newData;
        console.log("Google Sheet data updated:", jsonData);
      } else {
        console.log("No changes detected in Google Sheet.");
      }
    } else {
      console.log("No data found.");
    }
  } catch (error) {
    console.error("Error reading Google Sheets:", error);
  }
};

// Authorize a client with credentials
const authorize = () => {
  const credentials = JSON.parse(fs.readFileSync(credentialsPath));

  // Correctly initializing GoogleAuth
  const auth = new google.auth.GoogleAuth({
    keyFile: credentialsPath, // Path to service account credentials
    scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Scopes needed for Google Sheets
  });

  return auth;
};

// Call the function to read the Google Sheet
const POLLING_INTERVAL = 60000; // 5 minutes

// Poll the Google Sheet every 5 minutes
setInterval(() => {
  console.log("Checking for Google Sheet updates...");
  readGoogleSheet();
}, POLLING_INTERVAL);

app.use(
  cors({
    origin: "*", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, headers)
  })
);

const allowedOrigins = ["http://localhost:3000"];

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Other routes
app.use("/donors", donorRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/admins", adminRoutes);
// API route to serve the Excel data
app.get("/data", (req, res) => {
  res.json(jsonData);
});
export default app;
