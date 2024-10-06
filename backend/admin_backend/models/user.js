import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishList: {
    type: Array,
    default: [],
  },
  cart: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("User", userSchema);
