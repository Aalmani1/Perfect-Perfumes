let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
const cookieParaser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

let port = 3001

app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(cookieParaser());

const router = require("./routes/index");

mongoose.Promise = global.Promise;

// db connection
mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.lpoxw.mongodb.net/Perfect-Perfumes?retryWrites=true&w=majority"
);

//routes
// app.get("*", checkUser);
app.use("/", router);
// app.use(authRoutes);
// app.get("./home", requireAuth, (req, res) => res.render("home"));

app.listen(port, () => {
  console.log("app work")
  if(process.env.NODE_ENV === "test") app.set("port" , 3001);
  else app.set("port",process.env.PORT || 3000 )
});


