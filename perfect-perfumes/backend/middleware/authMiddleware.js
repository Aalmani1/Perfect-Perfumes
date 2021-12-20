const jwt = require("jsonwebtoken");
const user = require("../models/user");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is varifide
  if (token) {
    jwt.verity(token, "secret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("./login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("./login");
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verity(token, "secret", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        console.log(decodedToken);
        let user = await user.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
