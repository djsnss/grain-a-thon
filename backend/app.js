import express from "express";
import donorRoutes from "./routes/donorRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/donors", donorRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/admins", adminRoutes);

export default app;
