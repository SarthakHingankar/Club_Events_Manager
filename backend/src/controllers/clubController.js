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
  try {
    const { name, description } = req.body;
    const adminId = req.user.uid || 2;

    const query =
      "INSERT INTO clubs (name, description, created_by) VALUES (?, ?, ?)";
    await db.execute(query, [name, description, adminId]);

    res.status(201).json({ message: "Club created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getClub = async (req, res) => {
  try {
    const { id } = req.params;
    const [clubs] = await db.execute(
      `SELECT * FROM clubs WHERE club_id = ${id}`
    );
    res.status(200).json(clubs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
};

exports.updateClub = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const [result] = await db.execute(
      "UPDATE clubs SET name = ?, description = ? WHERE id = ?",
      [name, description, id]
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
    const { id } = req.params;
    await db.execute(`DELETE FROM clubs WHERE club_id = ${id}`);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch clubs" });
  }
};
