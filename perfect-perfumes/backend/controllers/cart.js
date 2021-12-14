let Cart = require("../models/cart");
let User = require("../models/user");
let Product = require("../models/product");

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
    User.findById({ _id: req.body.id })
      .then((user) => {
        Cart.findById({ _id: user.cart })
          .populate("cart.items")
          .then((cart) => {
            res.send(cart);
          });
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  create: async (req, res) => {
    let product = await Product.findById({ _id: req.body.item });

    User.findById({ _id: req.body.id }).then((user) => {
      if (user.cart == undefined) {
        Cart.create({
          cart: {
            items: req.body.item,
            subtotal: product.price * req.body.quantity,
            quantity: req.body.quantity,
          },
          total: product.price * req.body.quantity,
        }).then((cart) => {
          User.findByIdAndUpdate(req.body.id, {
            cart: cart,
          }).then(async (user) => {
            await user.save();
            res.send(user);
          });
        });
      } else {
        console.log("cart " + user.cart);
        User.findById({ _id: req.body.id })
          .populate("cart")
          .then((openCart) => {
            console.log(openCart);
            Cart.findByIdAndUpdate(user.cart, {
              $push: {
                cart: {
                  items: req.body.item,
                  subtotal: product.price * req.body.quantity,
                  quantity: req.body.quantity,
                },
              },
              total: openCart.cart.total + product.price * req.body.quantity,
            }).then((cart) => {
              User.findByIdAndUpdate(req.body.id, {
                cart: cart,
              }).then(async (user) => {
                await user.save();
                res.send(user);
              });
            });
          });
      }
    });
  },

  delete: (req, res) => {
    let cartId = req.params.orderid;
    Cart.findByIdAndRemove(cartId)
      .then(() => {
        res.json({ message: "Cart is deleted" });
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  update: (req, res) => {
    let cartd = req.params.orderid;
    let cartInfo = {
      items: req.body.items,
      total: req.body.total,
      userId: req.body.userId,
    };
    Cart.findByIdAndUpdate(cartId, { $set: cartInfo })
      .then((user) => {
        res.json({ message: "Cart information has been updated" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },
};
