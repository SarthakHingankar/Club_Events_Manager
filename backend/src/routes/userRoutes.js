const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");
const { getUserDetails } = require("../controllers/userController");

router.get("/:user_id", verifyToken, getUserDetails);

module.exports = router;
