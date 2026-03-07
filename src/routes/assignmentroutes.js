const express = require("express");
const router = express.Router();

const Assignment = require("../models/assignmentmodel");

router.post("/", async (req, res) => {

  const assignment = await Assignment.create(req.body);

  res.json(assignment);
});

module.exports = router;