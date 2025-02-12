const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const { createClub, getAllClubs } = require("../controllers/clubController");

const router = express.Router();

// router.post("/", verifyToken, checkRole("admin"), createClub);
// router.get("/", verifyToken, getAllClubs);

router.get("/", getAllClubs);
router.post("/", createClub);
router.get("/:id", getClubById);
router.put("/:id", updateClub);
router.delete("/:id", deleteClub);

module.exports = router;
