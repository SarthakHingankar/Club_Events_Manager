require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend communication

// Import routes here
const clubRoutes = require("./routes/clubRoutes");
const membersRoutes = require("./routes/membersRoutes");
const eventRoutes = require("./routes/eventRoutes");
const { verifyToken } = require("./middleware/authMiddleware");
const { checkAndAddUser } = require("./middleware/checkAndAddUser");
const userRoutes = require("./routes/userRoutes");

// Mount routes - Update the order and paths
app.use("/api/events", eventRoutes); // Changed from '/' to '/api/events'
app.use("/api/clubs", clubRoutes); // Added /api prefix
app.use("/api/users", userRoutes); // Added /api prefix

// Default route
app.get("/", verifyToken, checkAndAddUser, (req, res) => {
  res.json({ message: "User exists or has been added!" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
