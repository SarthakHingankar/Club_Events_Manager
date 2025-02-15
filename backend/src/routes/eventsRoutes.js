const express = require("express");
const { verifyToken, checkAdmin } = require("../middleware/authMiddleware");

const {
  getAllEvents,
  getClubEvents,
  getEvent,
  createEvent,
  updateEvent,
  removeEvent,
} = require("../controllers/eventsController");

const router = express.Router();

router.get("/", verifyToken, getAllEvents);
router.get("/:club_id", verifyToken, getClubEvents);
router.get("/:club_id/:event_id", verifyToken, getEvent);
router.post("/:club_id", verifyToken, checkAdmin, createEvent);
router.put("/:club_id/:event_id", verifyToken, checkAdmin, updateEvent);
router.delete("/:club_id/:event_id", verifyToken, checkAdmin, removeEvent);

module.exports = router;
