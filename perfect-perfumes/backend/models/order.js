const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let counter = 1000;
const orderSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
    default: () => counter++,
  },
  items: {
    type: Schema.Types.ObjectId,
    ref: "cart",
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("order", orderSchema);
