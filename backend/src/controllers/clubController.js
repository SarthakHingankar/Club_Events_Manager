const db = require("../config/db"); // Import DB connection

exports.getAllClubs = async (req, res) => {
  try {
    const [clubs] = await db.execute("SELECT * FROM clubs");
    res.status(200).json(clubs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
};

exports.createClub = async (req, res) => {
  const connection = await db.getConnection(); // Start a database connection
  await connection.beginTransaction(); // Start a transaction

  try {
    const { name, description } = req.body;
    const user_id = req.user.uid; // Extract user ID from authentication middleware

    // Insert the new club into the `clubs` table
    const [clubResult] = await connection.execute(
      "INSERT INTO clubs (name, description, created_by) VALUES (?, ?, ?)",
      [name, description, user_id]
    );
    const club_id = clubResult.insertId; // Get the new club's ID

    // Add the creator as an admin in `club_members`
    await connection.execute(
      "INSERT INTO club_members (club_id, user_id, role) VALUES (?, ?, 'admin')",
      [club_id, user_id]
    );

    await connection.commit();

    res.status(201).json({ message: "Club created and admin added!", club_id });
  } catch (error) {
    await connection.rollback();
    console.error("Error creating club:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    connection.release();
  }
};

exports.getClub = async (req, res) => {
  try {
    const { club_id } = req.params;
    const [clubs] = await db.execute(
      `SELECT * FROM clubs WHERE club_id = ${club_id}`
    );
    res.status(200).json(clubs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
};

exports.updateClub = async (req, res) => {
  try {
    const { club_id } = req.params;
    const { name, description } = req.body;

    const [result] = await db.execute(
      "UPDATE clubs SET name = ?, description = ? WHERE club_id = ?",
      [name, description, club_id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Club not found" });
    }

    res.status(200).json({ message: "Club updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteClub = async (req, res) => {
  try {
    const { club_id } = req.params;
    await db.execute(`DELETE FROM clubs WHERE club_id = ${club_id}`);
    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
};
