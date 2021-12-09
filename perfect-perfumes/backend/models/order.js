const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: {},
  total: Number,
  userId: {
    // type: Schema.Types.ObjectId,
    // ref: "User",
  },
});

module.exports = mongoose.model("order", orderSchema);
