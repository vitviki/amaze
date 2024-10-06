import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createToken } from "../utils/jwt.js";

dotenv.config();

// Register a new user
export const Register = async (req, res) => {
  try {
    const { name, number, email, password } = req.body;

    if (!name || !number || !email || !password) {
      return req.status(500).json({
        message: "Invalid credentials. Please try again",
        success: false,
      });
    }

    // Check if the user already exists.
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message:
          "email-already-in-use. Please try again with a different email.",
        success: false,
      });
    }

    // Hash the password before adding it to DB.
    const hashedPassword = await bcrypt.hash(password, 16);

    const newUser = await User.create({
      name,
      number,
      email,
      password: hashedPassword,
    });

    delete newUser.password;

    return res
      .status(201)
      .json({ message: "User created successfully", newUser, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error while registering. Please try again",
      error,
      success: false,
    });
  }
};

// User Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Invalid credentials. Please try again",
        success: false,
      });
    }

    // Check if user with specified email exists.
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password. Please try again!",
        success: false,
      });
    }

    // Check if the password provided is correct or not.
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(401).json({
        message: "Invalid email or password. Please try again!",
        success: false,
      });
    }

    const token = createToken({ id: user._id });
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000),
      secure: true,
      httpOnly: true,
      sameSite: "None",
    });

    const returnUser = {
      id: user._id,
      name: user.name,
      number: user.number,
      email: user.email,
      cart: user.cart,
      wishList: user.wishList,
    };

    return res.status(200).json({
      message: `Welcome back ${user.name}`,
      token,
      returnUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error while registering. Please try again",
      error,
      success: false,
    });
  }
};

// User Logout
export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("authToken", "", {
      expiresIn: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ message: "Logged out successfully", success: true });
};

export const UpdateWishList = async (req, res) => {
  try {
    const data = req.body;
    // Get the user.
    const user = req.user;
    user.wishList = data.wishList;
    user.save();

    return res
      .status(204)
      .json({ message: "Wishlist updated successfully", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong. Please try again" });
  }
};

export const UpdateCart = async (req, res) => {
  try {
    const data = req.body;
    // Get the user.
    const user = req.user;
    user.cart = data.cart;
    user.save();

    return res
      .status(204)
      .json({ message: "Cart updated successfully", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong. Please try again" });
  }
};

// Add/Remove item from cart
export const AddRemoveItemFromCart = async (req, res) => {
  const user = req.user;
  const data = req.body;

  // Look for that specific item in the cart.
  // If it is, then remove it from the cart.
  const itemFound = user.cart.find((item) => item.id === data.id);

  if (itemFound) {
    user.cart = user.cart.filter((item) => item.id !== data.id);
  } else {
    user.cart.push(data);
  }

  // save the user.
  user.save();

  return res.status(200).json({
    message: "Cart updated successfully",
    user,
    success: true,
  });
};
