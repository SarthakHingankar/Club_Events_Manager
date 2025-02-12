const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on expected usage
  queueLimit: 0,
});

// Promisify queries for async/await support
const db = pool.promise();

module.exports = db;
