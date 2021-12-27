let Order = require("../models/order");
let Cart = require("../models/cart");
let User = require("../models/user");

module.exports = {
  index: (req, res) => {
    User.find({})
      .then((user) => {
        Cart.find({})
          .populate("cart.items")
          .then((cart) => {
            res.send(cart);
          });
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
        res.json({ error: error });
      });
  },

  create: (req, res) => {
    User.findById({ _id: req.body.userId })
      .then((user) => {
        Cart.find({ _id: user.cart })
          .populate("cart.items")
          .then((cart) => {
            console.log("cart", cart);
            Order.create({
              items: cart[0],
              userId: user,
            }).then((order) => {
              User.findByIdAndUpdate(
                { _id: req.body.userId },
                { $unset: { cart: cart } }
              ).then(async (user) => {
                await order.save();
                await user.save();
                await res.send(order);
              });
            });
          });
      })

      .catch((error) => {
        res.json({ error: error });
      });

    // let order = new Order({
    //   // refId: Math.floor(Math.random() * 10000000 + 1),
    //   items: req.body.items,
    //   total: req.body.total,
    //   userId: req.body.userId,
    // });
    // console.log(order);

    // order.save((error) => {
    //   if (error) res.json({ error: error });
    //   else res.json({ message: "Order is inserted" });
    // });
  },

  delete: (req, res) => {
    let orderId = req.params.orderid;
    Order.findByIdAndRemove(orderId)
      .then(() => {
        res.json({ message: "Order is deleted" });
      })
      .catch((error) => {
        res.json({ error: error });
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
        res.json({ error: error });
      });
  },
};
