let Product = require("../models/product");

module.exports = {
  index: (req, res) => {
    Product.find({})
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  show: (req, res) => {
    let productId = req.params.productid;
    Product.findById(productId)
      .then((product) => {
        res.json({ product });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  update: (req, res) => {
    let productId = req.params.productid;
    let productInfo = {
      brand: req.body.brand,
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      size: req.body.size,
      price: req.body.price,
      gender: req.body.gender,
    };
    Product.findByIdAndUpdate(productId, { $set: productInfo })
      .then((user) => {
        res.json({ message: "Product information has been updated" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  delete: (req, res) => {
    let productId = req.params.productid;
    Product.findByIdAndRemove(productId)
      .then(() => {
        res.json({ message: "Product is deleted" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  create: (req, res) => {
    let product = new Product({
      refId: Math.floor(Math.random() * 10000 + 1),
      brand: req.body.brand,
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      size: req.body.size,
      price: req.body.price,
      gender: req.body.gender,
    });
    product.save((error) => {
      if (error) res.json({ erorr: erorr });
      else res.json({ message: "Product is inserted" });
    });
  },
};
