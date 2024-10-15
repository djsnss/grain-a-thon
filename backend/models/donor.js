import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  grainCollected: { type: Number, required: true, min: 0 },
  committee: { type: String },
  email: { type: String, required: true },
  sapID: { type: Number, required: true, unique: true },
});

export default mongoose.model("Donor", donorSchema);
