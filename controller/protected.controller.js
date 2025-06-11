const express = require("express");

const protectedTest = (req, res) => {
  console.log("Token verified. Protected route accessed.");
  res.json({ message: "You have accessed a protected route!" });
};

module.exports = { protectedTest };
