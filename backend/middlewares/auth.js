import { adminSessions } from "../controllers/adminC.js";

const authenticateAdmin = async (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  console.log(token);
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token and username are required" });
    }
    console.log(adminSessions);
    if (!adminSessions[token]) {
      return res
        .status(403)
        .json({ message: "Invalid token or session expired" });
    }
    next();
  } catch (err) {
    console.error("Authorization failed:", err);
    res.status(400).send("Authorization failed");
  }
};

export default authenticateAdmin;
