import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  grainCollected: { type: Number, required: true, min: 0 },
});

export default mongoose.model("Donor", donorSchema);
