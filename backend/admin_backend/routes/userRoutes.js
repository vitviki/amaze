import express from "express";
import authenticate from "../middlwares/userAuth.js";

import {
  Register,
  Login,
  Logout,
  UpdateWishList,
  UpdateCart,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.post("/logout", Logout);
userRouter.put("/update-wishlist", authenticate, UpdateWishList);
userRouter.put("/update-cart", authenticate, UpdateCart);

export default userRouter;
