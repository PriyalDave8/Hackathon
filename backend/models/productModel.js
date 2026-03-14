import mongoose from "mongoose";

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,   // image path / url
      required: true,
    },

    category: {
      type: String,
      default: "general",
    },

    countInStock: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;