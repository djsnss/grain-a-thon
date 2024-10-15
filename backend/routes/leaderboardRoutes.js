import express from "express";
import {
  getDepartment,
  getIndividual,
  getCommittee,
} from "../controllers/leaderboardC.js";

const router = express.Router();

router.get("/department", getDepartment);
router.get("/individual", getIndividual);
router.get("/committee", getCommittee);

export default router;
