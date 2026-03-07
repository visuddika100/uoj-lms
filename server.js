require("dotenv").config();

const connectDB = require("./src/config/db");
const app = require("./src/app");

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});