const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/uj_lms")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend + Database working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
