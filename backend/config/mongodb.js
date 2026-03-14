const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/ecommerce";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);   // ✅ options hataavi didha
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;