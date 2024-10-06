import { User } from "../models/user.js";
import { verifyToken } from "../utils/jwt.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "Not authorized" });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized, token expired" });
    }

    return res.status(500).json({
      message: "Error authorizing user. Please try again",
      error: error.message,
    });
  }
};

export default authenticate;
