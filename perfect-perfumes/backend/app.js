let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");

app = express();
app.use(cors());

const router = require("./routes/index");
app.use(express.json());
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.lpoxw.mongodb.net/Perfect-Perfumes?retryWrites=true&w=majority"
);

app.use("/", router);

app.listen(3001, () => {
  console.log("app work");
});
