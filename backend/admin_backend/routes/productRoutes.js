import express from "express";
import {
  addNewProduct,
  removeProduct,
  getAllProducts,
} from "../controllers/products.js";
import uploadMultiple from "../middlwares/uploadImages.js";
import multer from "../multer.js";

const router = express.Router();

router.post(
  "/add-product",
  multer.array("images"),
  uploadMultiple,
  addNewProduct
);
router.delete("/removeProduct/:productId", removeProduct);
router.get("/getAllProducts", getAllProducts);
export default router;
