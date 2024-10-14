import express from "express";
import { AdminSignup, AdminLogin } from "../controllers/adminC.js";

const router = express.Router();

router.post("/signup", AdminSignup);
router.post("/login", AdminLogin);

export default router;
