import { Products } from "../models/products.js";

// Add New Product
export const addNewProduct = async (req, res) => {
  try {
    const { title, price, description, bestSeller, category, imagePath } =
      req.body;

    if (!title || !price || !description || !imagePath || !category) {
      return res.status(400).json({
        message: "Please provide all necessary information",
        success: false,
      });
    }

    await Products.create({
      title,
      price,
      description,
      bestSeller,
      category,
      image: imagePath,
    });

    return res.status(200).json({
      message: "Product added successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

// Remove product
export const removeProduct = async (req, res) => {};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});

    return res.status(200).json({
      products,
      succes: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
