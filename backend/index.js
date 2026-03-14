const express = require("express");
const cors = require("cors");

const connectDB = require("./config/mongodb");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// connect mongo
connectDB();

// serve uploads folder
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});