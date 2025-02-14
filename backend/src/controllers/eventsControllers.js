const db = require("../config/db");

exports.getAllEvents = async (req, res) => {
  try {
    const [events] = await db.execute("SELECT * FROM events");
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};
exports.getClubEvents = async (req, res) => {
  try {
    const { club_id } = req.params;
    const [events] = await db.execute(
      "SELECT * FROM events WHERE club_id = ?",
      [club_id]
    );
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};
exports.getEvent = async (req, res) => {
  try {
    const { event_id } = req.params;
    const [events] = await db.execute("SELECT * FROM events WHERE id = ?", [
      event_id,
    ]);
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};
exports.createEvent = async (req, res) => {
  try {
    const { club_id } = req.params;
    const { title, description, date_time, venue } = req.body;

    // Insert event
    await db.execute(
      "INSERT INTO events (club_id, title, description, date_time, venue) VALUES (?, ?, ?, ?, ?)",
      [club_id, title, description, date_time, venue]
    );

    res.status(201).json({ message: "Event created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.updateEvent = async (req, res) => {
  try {
    const { event_id } = req.params;
    const { title, description, date_time, venue } = req.body;

    await db.execute(
      "UPDATE events SET title = ?, description = ?, date_time = ?, venue = ? WHERE id = ?",
      [title, description, date_time, venue, event_id]
    );

    res.status(200).json({ message: "Event updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.removeEvent = async (req, res) => {
  try {
    const { event_id } = req.params;

    await db.execute("DELETE FROM events WHERE id = ?", [event_id]);

    res.status(200).json({ message: "Event deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
