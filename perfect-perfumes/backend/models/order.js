const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  refId: {
    type: Number,
    trim: true,
    required: true,
    unique: true,
  },
  items: {},
  total: Number,
  userId: {
    // type: Schema.Types.ObjectId,
    // ref: "User",
  },
});

module.exports = mongoose.model("order", orderSchema);
