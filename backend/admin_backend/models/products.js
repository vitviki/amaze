import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export const Products = mongoose.model("Products", productsSchema);
