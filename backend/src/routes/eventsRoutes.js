const express = require("express");

const {
  getAllEvents,
  getClubEvents,
  getEvent,
  createEvent,
  updateEvent,
  removeEvent,
} = require("../controllers/eventsController");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:club_id", getClubEvents);
router.get("/:club_id/:event_id", getEvent);
router.post("/:club_id", createEvent);
router.put("/:event_id", updateEvent);
router.delete("/:event_id", removeEvent);

module.exports = router;
