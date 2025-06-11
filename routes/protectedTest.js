const express = require("express");
const router = express.Router();
const { protectedTest } = require("../controller/protected.controller");
const authMiddleware = require("../middleware/authMiddleware");
router.get("/protected", authMiddleware, protectedTest);
module.exports = router;
