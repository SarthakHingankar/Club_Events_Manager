const express = require("express");
const { verifyToken, checkAdmin } = require("../middleware/authMiddleware");
const {
  createClub,
  getAllClubs,
  getClub,
  updateClub,
  deleteClub,
} = require("../controllers/clubController");

const router = express.Router();

router.get("/", verifyToken, getAllClubs);
router.post("/", verifyToken, createClub);
router.get("/:club_id", verifyToken, getClub);
router.put("/:club_id", verifyToken, checkAdmin, updateClub);
router.delete("/:club_id", verifyToken, checkAdmin, deleteClub);

module.exports = router;
