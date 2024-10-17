import express from "express";
import {
  getDepartment,
  getDepartmentDonors,
  getCommittee,
  getAll,
} from "../controllers/leaderboardC.js";

const router = express.Router();

router.get("/department", getDepartment);
router.get("/departmentDonors/:department", getDepartmentDonors);
router.get("/all", getAll);
router.get("/committee", getCommittee);

export default router;
