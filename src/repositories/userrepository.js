const User = require("../models/usermodel");

exports.createUser = (data) => User.create(data);

exports.findByEmail = (email) => User.findOne({ email });

exports.findById = (id) => User.findById(id);
