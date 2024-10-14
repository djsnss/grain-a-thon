import bcrypt from "bcrypt";
import Admin from "../models/admin.js";
import dotenv from "dotenv";

dotenv.config();
const adminSessions = {};

const AdminSignup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    res.status(201).send({ message: "Admin created successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const AdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error("Unable to login");
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Unable to login");
    }
    if (!username) {
      return res.status(400).json({ message: "Admin username required" });
    }
    const authToken = process.env.random_string;
    adminSessions[authToken] = admin._id;
    res.send({ admin, message: "Login Successful" });
  } catch (error) {
    res.status(400).send(error);
  }
};

export { AdminSignup, AdminLogin, adminSessions };
