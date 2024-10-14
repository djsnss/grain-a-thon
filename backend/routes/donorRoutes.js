import express from "express";
import {
  DonorCreate,
  GetAllDonors,
  UpdateDonor,
  DeleteDonor,
} from "../controllers/donorC.js";
import authenticateAdmin from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", authenticateAdmin, DonorCreate);
router.get("/get", GetAllDonors);
router.patch("/update/:id", authenticateAdmin, UpdateDonor);
router.delete("/delete/:id", authenticateAdmin, DeleteDonor);

export default router;
