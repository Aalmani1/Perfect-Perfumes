let User = require("../models/user");
let mongoose = require("mongoose");

module.exports = {
  index: (req, res) => {
    User.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        res.json({ error: error });
      });
  },

  show: (req, res) => {
    let userId = req.params.userid;
    User.findById(userId)
      .then((user) => {
        res.json({ user });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  update: (req, res) => {
    let userId = req.params.userid;
    let userInfo = {
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      Fname: req.body.Fname,
      Lname: req.body.Lname,
    };
    User.findByIdAndUpdate(userId, { $set: userInfo })
      .then((user) => {
        res.json({ message: "User information has been updated" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  delete: (req, res) => {
    let userId = req.params.userid;
    User.findByIdAndRemove(userId)
      .then(() => {
        res.json({ message: "User is deleted" });
      })
      .catch((error) => {
        res.json({ error: erorr });
      });
  },

  create: (req, res) => {
    let user = new User({
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      Fname: req.body.Fname,
      Lname: req.body.Lname,
    });
    user.save((error) => {
      if (error) res.json({ erorr: erorr });
      else res.json({ message: "User is inserted" });
    });
  },
};
