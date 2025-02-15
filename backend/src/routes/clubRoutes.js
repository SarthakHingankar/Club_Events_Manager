const express = require("express");
const router = express.Router();
const { verifyToken, checkAdmin } = require("../middleware/authMiddleware");
const {
  getAllClubs,
  getClub,
  getMemberRole,
  createClub,
  updateClub,
  deleteClub,
} = require("../controllers/clubController");

const {
  getClubEvents,
  createEvent,
  updateEvent,
  removeEvent,
} = require("../controllers/eventController");

// Debug middleware to log all requests
router.use((req, res, next) => {
  console.log(`Route accessed: ${req.method} ${req.originalUrl}`);
  next();
});

// Club routes
router.get("/", verifyToken, getAllClubs);
router.get("/:club_id", verifyToken, getClub);
router.get("/:club_id/members/role", verifyToken, getMemberRole);
router.post("/", verifyToken, createClub);
router.put("/:club_id", verifyToken, checkAdmin, updateClub);
router.delete("/:club_id", verifyToken, checkAdmin, deleteClub);

// Club event routes
router.get("/:club_id/events", verifyToken, getClubEvents);
router.post("/:club_id/events", verifyToken, checkAdmin, createEvent);
router.put("/:club_id/events/:event_id", verifyToken, checkAdmin, updateEvent);
router.delete(
  "/:club_id/events/:event_id",
  verifyToken,
  checkAdmin,
  removeEvent
);

module.exports = router;
