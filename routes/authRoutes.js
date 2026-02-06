const express = require("express");
const router = express.Router();
const users = require("../dummyUsers");

router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
