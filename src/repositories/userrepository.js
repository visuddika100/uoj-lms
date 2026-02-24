const User = require("../models/user.model");

exports.createUser = (data) => User.create(data);

exports.findByEmail = (email) => User.findOne({ email });

exports.findById = (id) => User.findById(id);
