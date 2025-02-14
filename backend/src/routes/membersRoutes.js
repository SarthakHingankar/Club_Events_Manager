const express = require("express");
// const { verifyToken, checkRole } = require("../middleware/authMiddleware");
const {
  listMembers,
  joinClub,
  removeMember,
} = require("../controllers/membersController");

const router = express.Router();

// router.post("/", verifyToken, checkRole("admin"), createClub);
// router.get("/", verifyToken, getAllClubs);

router.get("/:club_id", listMembers);
router.post("/:club_id", joinClub);
router.delete("/:club_id/:user_id", removeMember);

module.exports = router;
