import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ImageKit from "imagekit";
import cors from "cors";
import productRoute from "./routes/productRoutes.js";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/upload", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});
app.use("/api/products", productRoute);

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
