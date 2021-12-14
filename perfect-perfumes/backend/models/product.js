const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,

    unique: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  size: {
    type: Number,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("product", productSchema);
