const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware"); // optional: only admin/protected

// ================= ROUTES =================

// Create product (protected)
router.post("/", protect, createProduct);

// Get all products (public)
router.get("/", getAllProducts);

// Get single product by ID (public)
router.get("/:id", getSingleProduct);

// Delete product (protected)
router.delete("/:id", protect, deleteProduct);

module.exports = router;