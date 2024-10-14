import express from "express";
import { getDepartment, getIndividual } from "../controllers/leaderboardC.js";

const router = express.Router();

router.get("/department", getDepartment);
router.get("/individual", getIndividual);

export default router;
