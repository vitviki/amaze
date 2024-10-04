import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMultiple = asyncHandler(async (req, res, next) => {
  try {
    const images = req.files;
    const imageURLS = [];

    for (let image of images) {
      const result = await cloudinary.uploader.upload(image.path, {
        resource_type: "auto",
      });

      imageURLS.push(result.secure_url);
    }

    req.images = imageURLS;
    console.log(req.images);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error uploading images: ${error}`);
  }
});
export default uploadMultiple;
