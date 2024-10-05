import mongoose from "mongoose";

const brandsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Brands = mongoose.model("Brands", brandsSchema);
