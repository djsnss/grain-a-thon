import express from "express";
import xlsx from "xlsx";
import fs from "fs";
import chokidar from "chokidar";
import donorRoutes from "./routes/donorRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

connectDB();
const app = express();
let jsonData = [];

// Function to read the Excel file
const readExcelFile = () => {
  const file = "C:/NSS/Grain-A-Thon Collection.xlsx";
  if (fs.existsSync(file)) {
    const workbook = xlsx.readFile(file);
    const sheet_names = workbook.SheetNames;
    const sheet = workbook.Sheets[sheet_names[0]];

    if (sheet) {
      jsonData = xlsx.utils.sheet_to_json(sheet, {
        header: [
          "SapID", // __EMPTY -> Student ID
          "Email", // __EMPTY_1 -> Email
          "Name", // __EMPTY_2 -> Full Name
          "PhoneNo", // __EMPTY_3 -> Phone Number
          "Branch", // __EMPTY_4 -> Department
          "Rice", // 'Quantity ' -> Quantity
          "Wheat", // __EMPTY_5 -> Some numeric field
          "CommitteeName",
          "Money", // __EMPTY_6 -> Batch
        ],
        range: 1, // Skip the header row, if the first row contains column names
      });
      console.log(jsonData);
    } else {
      console.log("Sheet is empty or not found.");
    }
  } else {
    console.log("File does not exist.");
  }
};

// Read the Excel file at startup
readExcelFile();
const path = "C:/NSS/Grain-A-Thon Collection.xlsx";
// Watch for changes in the Excel file
const watcher = chokidar.watch("C:/NSS/Grain-A-Thon Collection.xlsx", {
  usePolling: true,
  interval: 1,
  persistent: true,
  ignoreInitial: true,
});
watcher.on("change", () => {
  console.log(`${path} file changed, reloading...`);
  readExcelFile();
});

// API route to serve the Excel data
app.get("/data", (req, res) => {
  res.json(jsonData);
});
=======

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin) return callback(null, true);

      // Check if the origin is in the allowed list
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Other routes
app.use("/donors", donorRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/admins", adminRoutes);

export default app;
