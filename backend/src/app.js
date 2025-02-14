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
const eventsRoutes = require("./routes/eventsRoutes");

// Route setup here
app.use("/clubs", clubRoutes);
app.use("/members", membersRoutes);
app.use("/events", eventsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

module.exports = app;
