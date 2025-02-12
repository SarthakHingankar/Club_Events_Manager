const db = require("../config/db"); // Import DB connection

// Create a new club
exports.createClub = async (req, res) => {
  //   try {
  //     const { name, description } = req.body;
  //     const adminId = req.user.uid; // Assuming Firebase Auth stores user info

  //     const query =
  //       "INSERT INTO clubs (name, description, admin_id) VALUES (?, ?, ?)";
  //     await db.execute(query, [name, description, adminId]);

  //     res.status(201).json({ message: "Club created successfully!" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  console.log("Club created successfully!");
};

// Get all clubs
exports.getAllClubs = async (req, res) => {
  //   try {
  //     const [clubs] = await db.execute("SELECT * FROM clubs");
  //     res.status(200).json(clubs);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "Failed to fetch clubs" });
  //   }
  console.log("All clubs fetched successfully!");
};
