let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
const cookieParaser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const stripe = require("stripe")
("sk_test_51KAtlhJHCqAHPYsNWnG0yKdMLQHujQYFpLJwkxYHJcnyhlboIAiF8o5LiKr0DcknXa6gsRiFHmJieUibdr9tW41j008trAF9a2");


let port = 3001

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

//routes
// app.get("*", checkUser);
app.use("/", router);
// app.use(authRoutes);
// app.get("./home", requireAuth, (req, res) => res.render("home"));

// app.post("./checkout", async(req,res)=>{
//   console.log("request: ", req.body)

//   let error ;
//   let status;

//   try{
//     const {token}= req.body;

//     const customer = await
//     stripe.customer.create({
//       email:token.email,
//       source:token.id
//     })

//     const idempotency_key = uuid()
//     const charge= await stripe.charges.create({
//       amount:total*100,
//       currency:"usd",
//       customer:customer.id,
//       receipt_email:token.email,
//       description:`Purchased`,
//       shipping:{
//         name:token.card.name,
//         address:{
//           line1: token.card.address_line1,
//           line2: token.card.address_line2,
//           city: token.card.address_city,
//           country: token.card.address_country,
//           postal_code:token.card.address_zip

//         }
//       }

//     },
//     { 
//       idempotency_key
//       }
//     )
//     console.log("charge", {charge})
//     status = "success"
//   }catch(error){
//     console.log("Error ", error)
//     status:"failure"
//   }
//   res.json({error,status})
// })
app.listen(port, () => {
  console.log("app work")
  if(process.env.NODE_ENV === "test") app.set("port" , 3001);
  else app.set("port",process.env.PORT || 3000 )
});


