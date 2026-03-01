require("dotenv").config();
const connectDB = require("./src/config/db");
const express = require("express");

const app = express();

connectDB();

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});

