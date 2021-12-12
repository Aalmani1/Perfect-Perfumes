const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let counter = 100;
const orderSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
    default: () => counter++,
  },
  items: {},
  total: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("order", orderSchema);
