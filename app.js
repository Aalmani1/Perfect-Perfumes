let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const cookieParaser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const stripe = require("stripe")(
  "sk_test_51KAtlhJHCqAHPYsNWnG0yKdMLQHujQYFpLJwkxYHJcnyhlboIAiF8o5LiKr0DcknXa6gsRiFHmJieUibdr9tW41j008trAF9a2"
);

// let port = 3001;

app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(cookieParaser());

const router = require("./routes/index");
const product = require("./models/product");

mongoose.Promise = global.Promise;

// db connection
mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.lpoxw.mongodb.net/Perfect-Perfumes?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
});

//routes
// app.get("*", checkUser);
app.use("/", router);
// app.use(authRoutes);
// app.get("./home", requireAuth, (req, res) => res.render("home"));

app.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

// app.listen(PORT);

app.listen(process.env.PORT || 3001, () => {
  console.log("app work");
  if (process.env.NODE_ENV === "production") {
    // app.set(PORT, 3001);
    app.use("/", express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) => {
      console.log(path.resolve(__dirname, "frontend/build/index.html"));
      res.sendFile(path.resolve(__dirname + "/frontend/build", "index.html"));
    });
  } else app.set(PORT, process.env.PORT || 3001);
});

// app.listen(PORT, () => {
//   console.log(`Connected on= http://localhost:${PORT}`);
// });
