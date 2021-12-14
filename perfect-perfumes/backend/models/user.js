const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usertSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
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
  cart: { type: Schema.Types.ObjectId, ref: "cart" },
});

module.exports = mongoose.model("user", usertSchema);
