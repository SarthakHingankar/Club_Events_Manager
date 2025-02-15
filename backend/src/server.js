const app = require("./app"); // Import configured app
const port = 3001; // Make sure this is 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
