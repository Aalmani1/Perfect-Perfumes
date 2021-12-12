let Order = require("../models/order");

module.exports = {
  index: (req, res) => {
    Order.find({})
      .then((orders) => {
        res.json(orders);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  show: (req, res) => {
    let orderId = req.params.orderid;
    Order.findById(orderId)
      .then((order) => {
        res.json({ order });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  create: (req, res) => {
    let order = new Order({
      // refId: Math.floor(Math.random() * 10000000 + 1),
      items: req.body.items,
      total: req.body.total,
      userId: req.body.userId,
    });
    console.log(order);

    order.save((error) => {
      if (error) res.json({ erorr: erorr });
      else res.json({ message: "Order is inserted" });
    });
  },

  delete: (req, res) => {
    let orderId = req.params.orderid;
    Order.findByIdAndRemove(orderId)
      .then(() => {
        res.json({ message: "Order is deleted" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  update: (req, res) => {
    let orderId = req.params.orderid;
    let orderInfo = {
      items: req.body.items,
      total: req.body.total,
      userId: req.body.userId,
    };
    Order.findByIdAndUpdate(orderId, { $set: orderInfo })
      .then((user) => {
        res.json({ message: "Order information has been updated" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },
};
