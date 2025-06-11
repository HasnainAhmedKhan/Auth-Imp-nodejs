const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedTest");
// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
