import { Products } from "../models/products.js";
import { Categories } from "../models/categories.js";
import { Brands } from "../models/brands.js";

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

    // Check to see if the category already exists.
    // If not, then add this category to the category list.
    const checkCategory = await Categories.findOne({
      title: category.toLowerCase(),
    });
    if (!checkCategory) {
      await Categories.create({
        title: category.toLowerCase(),
      });
    }

    // Check to see if the brand already exists.
    // If not, then add the brand to the brand list.
    const checkBrand = await Brands.findOne({
      title: brand.toLowerCase(),
    });
    if (!checkBrand) {
      await Brands.create({
        title: brand.toLowerCase(),
      });
    }

    product.title = title;
    product.price = Number(price);
    product.description = description;
    product.brand = brand.toLowerCase();
    product.bestSeller = Boolean(bestSeller);
    product.category = category.toLowerCase();
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
