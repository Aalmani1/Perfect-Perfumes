const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let counter = 100;
const cartSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
    default: () => counter++,
  },
  cart: [
    {
      items: { type: Schema.Types.ObjectId, ref: "product" },
      subtotal: Number,
      quantity: Number,
    },
  ],

  total: {
    type: Number,
  },
});

module.exports = mongoose.model("cart", cartSchema);
