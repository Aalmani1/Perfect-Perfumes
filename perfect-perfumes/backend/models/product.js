const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    required: true,
  },
  size: {
    type: Number,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
