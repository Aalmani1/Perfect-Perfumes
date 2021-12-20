const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

let counter = 10000;
const usertSchema = new mongoose.Schema({
  // refId: {
  //   type: Number,
  //   trim: true,
  //   required: true,
  //   unique: true,
  //   default:()=>{counter++}
  // },
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
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  Fname: {
    type: String,
    trim: true,
    required: true,
  },
  Lname: {
    type: String,
    trim: true,
    required: true,
  },
  cart: { type: Schema.Types.ObjectId, ref: "cart" },
  userType: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"],
  },
});

usertSchema.post("save", function (doc, next) {
  console.log("new user created & saved", doc);
  next();
});

usertSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//static method to login user

usertSchema.statics.login = async function (email, password) {
  console.log(password);
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    console.log(auth);

    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserAuth = mongoose.model("user", usertSchema);

module.exports = UserAuth;
