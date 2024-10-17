import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  PhoneNo: { type: Number, required: true },
  Branch: { type: String, required: true },
  Quantity: {
    Rice: {
      type: Number,
    },
    Wheat: {
      type: Number,
    },
  },
  committeeName: { type: String },
  Email: { type: String, required: true },
  Money: {
    type: Number,
  },
  SapID: { type: Number, required: true, unique: true },
});

export default mongoose.model("Donor", donorSchema);
