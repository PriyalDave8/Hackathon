const Product = require("../models/productModel");

// ================= CREATE PRODUCT =================
const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and price required" });
    }

    const image = req.file ? req.file.path : null; // multer file path

    const product = await Product.create({
      name,
      price,
      description,
      image
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET ALL PRODUCTS =================
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= GET SINGLE PRODUCT =================
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= DELETE PRODUCT =================
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct
};