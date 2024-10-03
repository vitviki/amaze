import express from "express";
import {
  addNewProduct,
  removeProduct,
  getAllProducts,
} from "../controllers/products.js";

const router = express.Router();

router.route("/add-product").post(addNewProduct);
router.route("/removeProduct/:productId").delete(removeProduct);
router.route("/getAllProducts").get(getAllProducts);
export default router;
