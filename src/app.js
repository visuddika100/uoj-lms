const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authroutes");
const courseRoutes = require("./routes/courseroutes");
const assignmentRoutes = require("./routes/assignmentroutes");
const adminRoutes = require("./routes/adminroutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;