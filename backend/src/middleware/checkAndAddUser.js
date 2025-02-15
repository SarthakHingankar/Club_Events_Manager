const db = require("../config/db");

const checkAndAddUser = async (req, res, next) => {
  try {
    const { uid, name, email } = req.user; // Extract user details from Firebase token

    // Check if the user exists
    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE user_id = ?",
      [uid]
    );

    if (existingUser.length === 0) {
      // User does not exist, insert into the database
      await db.execute(
        "INSERT INTO users (user_id, name, email) VALUES (?, ?, ?)",
        [uid, name, email]
      );
      console.log(`New user added: ${name} (${email})`);
    }

    next(); // ✅ Proceed to the next middleware/controller
  } catch (error) {
    console.error("Error in checkAndAddUser:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { checkAndAddUser };
