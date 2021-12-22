let User = require("../models/user");
let mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
      // refId: Math.floor(Math.random() * 100000 + 1),
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

//handle Errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: " ", password: " " };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  // incorrect passowrd
  if (err.message === "incorrect passowrd") {
    errors.passowrd = "that passowrd is not correct";
  }

  //duplicate error code

  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, Fname,userType)  => {
  return jwt.sign({ id, Fname ,userType}, "secret", {
    expiresIn: maxAge,
  });
};

// module.exports.signup_get = (req, res) => {
//   res.render("signup");
// };

// module.exports.login_get = (req, res) => {
//   res.render("login");
// };

module.exports.signup_post = async (req, res) => {
  const { email, password, Lname, Fname, phoneNumber } = req.body;
  try {
    const user = await User.create({
      email,
      password,
      Lname,
      Fname,
      phoneNumber,
    });
    const token = createToken(user._id, user.Fname);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(req.body);
    const user = await User.login(email, password);
    const token = createToken(user._id, user.Fname, user.userType);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

// module.exports.logout_get = (req, res) => {
//   res.cookie("jwt", "", { maxAge: 1 });
//   res.redirect("/");
// };
