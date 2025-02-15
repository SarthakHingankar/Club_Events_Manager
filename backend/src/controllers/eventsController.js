const db = require("../config/db");

const { addEventToGoogleCalendar } = require("../util/googleCalender");

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
  const connection = await db.getConnection();
  await connection.beginTransaction();

  try {
    const { club_id } = req.params;
    const { title, description, start_time, end_time, venue } = req.body;
    const googleAccessToken = req.headers.authorization.split(" ")[1]; // Extract Google OAuth Token

    // Insert event into MySQL
    const [eventResult] = await connection.execute(
      "INSERT INTO events (club_id, title, description, start_time, end_time, venue) VALUES (?, ?, ?, ?, ?, ?)",
      [club_id, title, description, start_time, end_time, venue]
    );
    const event_id = eventResult.insertId; // Get newly created event ID

    // Create event in Google Calendar
    const googleCalendarEvent = await addEventToGoogleCalendar(
      googleAccessToken,
      title,
      description,
      start_time,
      end_time
    );

    await connection.commit();

    res.status(201).json({
      message: "Event created successfully!",
      event_id,
      google_event: googleCalendarEvent,
    });
  } catch (error) {
    await connection.rollback();
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    connection.release();
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { event_id } = req.params;
    const { title, description, start_time, end_time, venue } = req.body;

    await db.execute(
      "UPDATE events SET title = ?, description = ?, start_time = ?, end_time = ?, venue = ? WHERE id = ?",
      [title, description, start_time, end_time, venue, event_id]
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
