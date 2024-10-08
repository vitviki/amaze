import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import productRoute from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connect();
  console.log(`Server running at port: ${port}`);
});
