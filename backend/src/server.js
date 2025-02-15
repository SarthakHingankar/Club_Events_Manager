const app = require("./app");
const db = require("./config/db");

const port = process.env.PORT || 3001;

// Test database connection
db.getConnection()
  .then((connection) => {
    console.log("Database connected successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
