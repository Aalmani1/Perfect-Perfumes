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
    User.findById({ _id: req.params.id })
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

    console.log(product);
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
            let item = openCart.cart.cart.find(
              (it) => it.items == req.body.item
            );
            if (openCart.cart.cart.includes(item)) {
              console.log("includes");

              let cartId = user.cart;
              // let cartQuantity = {
              //   cart: {
              //     items: req.body.item,
              //     subtotal: product.price * (item.quantity + req.body.quantity),
              //     quantity: item.quantity + req.body.quantity,
              //   },
              //   total: openCart.cart.total + product.price * req.body.quantity,
              // };
              // Cart.findByIdAndUpdate(cartId, { $set: cartQuantity })
              //   .then((user) => {
              //     res.json({ message: "Cart information has been updated" });
              //   })
              //   .catch((error) => {
              //     res.json({ error: error });
              //   });

              // Cart.update(
              //   { _id: cartId, "cart.items": req.body.item },
              //   {
              //     $set: {
              //       "cart.$.items": req.body.item,
              //       "cart.$.subtotal":
              //         product.price * (item.quantity + req.body.quantity),
              //       "cart.$.quantity": item.quantity + req.body.quantity,
              //     },
              //     total:
              //       openCart.cart.total + product.price * req.body.quantity,
              //   },
              //   function (err, model) {
              //     if (err) {
              //       console.log(err);
              //     }
              //   }
              // );

              console.log("cart " + item._id);
              Cart.update(
                { _id: cartId, "cart.items": req.body.item },
                {
                  $inc: { "cart.$.quantity": req.body.quantity },
                  $set: {
                    "cart.$.items": req.body.item,
                    "cart.$.subtotal":
                      product.price * (item.quantity + req.body.quantity),
                  },
                  total:
                    openCart.cart.total + product.price * req.body.quantity,
                },
                function (err, model) {
                  if (err) {
                    console.log(err);
                  }
                }
              );

              // console.log(rrr);
              Cart.findById({ _id: cartId }).then((newCart) => {
                res.send(newCart);
              });
            } else {
              console.log("not includes");

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
            }
          });
      }
    });
  },

  delete: (req, res) => {
    User.findById({ _id: req.params.userId }).then((user) => {
      Cart.findByIdAndUpdate(
        { _id: user.cart },
        {
          $pull: {
            cart: {
              items: req.params.id,
            },
          },
        }
      ).then((cart) => {
        console.log(cart.cart);
        let subtotal;
        cart.cart.forEach((element) => {
          if (element.items == req.params.id) {
            console.log(element.subtotal);
            subtotal = element.subtotal;
          }
        });
        Cart.findByIdAndUpdate(
          { _id: user.cart },
          {
            total: cart.total - subtotal,
          }
        ).then(async (newCart) => {
          Cart.findById({ _id: newCart._id })
            .populate("cart.items")
            .then(async (newww) => {
              console.log(newCart);
              await newCart.save();
              console.log(newww);
              res.send(newww);
            });
        });
        // then(async (newCart) => {
        //   await newCart.save();
        //   Cart.find({})
        //   .populate("cart.items")
        //   .then((cart) => {
        //     res.send(cart);
        //   });
        //   res.send(newCart);
        // });
      });
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
        res.json({ error: error });
      });
  },
};
