import { Products } from "../models/products.js";

// Add New Product
export const addNewProduct = async (req, res) => {
  try {
    let product = {};

    const {
      title,
      price,
      description,
      bestSeller,
      category,
      rating,
      quantity,
      brand,
    } = req.body;
    const images = req.images;

    if (!title || !price || !description || !category || !brand) {
      return res.status(400).json({
        message: "Please provide all necessary information",
        success: false,
      });
    }

    product.title = title;
    product.price = Number(price);
    product.description = description;
    product.brand = brand;
    product.bestSeller = Boolean(bestSeller);
    product.category = category;
    product.images = images;
    product.rating = Number(rating);
    product.quantity = Number(quantity);
    const newProduct = new Products(product);
    const savedProduct = await newProduct.save();

    return res.status(200).json({
      message: "Product added successfully",
      savedProduct,
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
