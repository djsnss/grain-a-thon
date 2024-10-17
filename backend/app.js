import express from "express";
import fs from "fs";
import donorRoutes from "./routes/donorRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import {google} from "googleapis"

const app = express();
let jsonData = [];


// Load client secrets from a local file.
const credentialsPath = './grainathon-keys.json';
const spreadsheetId = '1ufbvsptEnOdfJYkmj9RpdaDgMWFKDB-RXJuluKQtnGY';
const range = 'Sheet1!A2:I'; // Modify the range as needed

// Function to read Google Sheets
const readGoogleSheet = async () => {
  try {
    const auth = await authorize(); // Make sure to wait for the auth initialization
    const client = await auth.getClient(); // Get the authorized client
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows.length) {
      jsonData = rows.map((row) => ({
        SapID: row[0],         // Student ID
        Email: row[1],         // Email
        Name: row[2],          // Full Name
        PhoneNo: row[3],       // Phone Number
        Branch: row[4],        // Department
        Rice: row[5],          // Quantity
        Wheat: row[6],         // Numeric field (Wheat)
        CommitteeName: row[7], // Committee Name
        Money: row[8],         // Batch/Money field
      }));

      console.log(jsonData);
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.error('Error reading Google Sheets:', error);
  }
};

// Authorize a client with credentials
const authorize = () => {
  const credentials = JSON.parse(fs.readFileSync(credentialsPath));

  // Correctly initializing GoogleAuth
  const auth = new google.auth.GoogleAuth({
    keyFile: credentialsPath, // Path to service account credentials
    scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Scopes needed for Google Sheets
  });

  return auth;
};


// Call the function to read the Google Sheet
readGoogleSheet();


// // Function to read the Excel file
// const readExcelFile = () => {
//   const file = "C:/NSS/Grain-A-Thon Collection.xlsx";
//   if (fs.existsSync(file)) {
//     const workbook = xlsx.readFile(file);
//     const sheet_names = workbook.SheetNames;
//     const sheet = workbook.Sheets[sheet_names[0]];

//     if (sheet) {
//       jsonData = xlsx.utils.sheet_to_json(sheet, {
//         header: [
//           "SapID", // __EMPTY -> Student ID
//           "Email", // __EMPTY_1 -> Email
//           "Name", // __EMPTY_2 -> Full Name
//           "PhoneNo", // __EMPTY_3 -> Phone Number
//           "Branch", // __EMPTY_4 -> Department
//           "Rice", // 'Quantity ' -> Quantity
//           "Wheat", // __EMPTY_5 -> Some numeric field
//           "CommitteeName",
//           "Money", // __EMPTY_6 -> Batch
//         ],
//         range: 1, // Skip the header row, if the first row contains column names
//       });
//       console.log(jsonData);
//     } else {
//       console.log("Sheet is empty or not found.");
//     }
//   } else {
//     console.log("File does not exist.");
//   }
// };

// // Read the Excel file at startup
// readExcelFile();
// const path = "C:/NSS/Grain-A-Thon Collection.xlsx";
// // Watch for changes in the Excel file
// const watcher = chokidar.watch("C:/NSS/Grain-A-Thon Collection.xlsx", {
//   usePolling: true,
//   interval: 1,
//   persistent: true,
//   ignoreInitial: true,
// });
// watcher.on("change", () => {
//   console.log(`${path} file changed, reloading...`);
//   readExcelFile();
// });
app.use(cors({
  origin: '*', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true, // Allow credentials (cookies, headers)
}));

const allowedOrigins = ["http://localhost:3000"];

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Other routes
app.use("/donors", donorRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/admins", adminRoutes);
// API route to serve the Excel data
app.get("/data", (req, res) => {
  res.json(jsonData);
})
export default app;
