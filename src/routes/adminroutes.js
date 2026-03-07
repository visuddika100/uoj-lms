const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.json("Admin Dashboard");
});

module.exports = router;