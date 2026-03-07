const express = require("express");
const router = express.Router();

const Course = require("../models/coursemodel");

router.post("/", async (req, res) => {

  const course = await Course.create(req.body);

  res.json(course);
});

router.get("/", async (req, res) => {

  const courses = await Course.find();

  res.json(courses);
});

module.exports = router;