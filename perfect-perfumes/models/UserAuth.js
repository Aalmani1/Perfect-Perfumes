const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter an password"],
    minlength: [6, "Mininum 6 caracter"],
    validate: [(val) => {}, "Please enter valid email"],
  },
});

//fire a function after doc saved to db
// userAuthSchema.post("save", function (doc, next) {

//   next();
// });

userAuthSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash()(this.password, salt);
  next();
});

//static method to login user

userAuthSchema.static.login = async function (email, password) {
  const user = await this.fidOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserAuth = mongoose.model("UserAuth", userAuthSchema);

module.exports = UserAuth;
