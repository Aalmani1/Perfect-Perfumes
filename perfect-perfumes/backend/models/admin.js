const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  Fname: {
    type: String,
    trim: true,
    required: true,
  },
  Lname: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("admin", adminSchema);
