import AdminNavBar from "../adminView/AdminNavBar";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import Login from "./Login";
import Signup from "./Signup";
import Contactus from "./Contactus";
import Cart from "./Cart";
import Display from "./Display";
import ErrorPage from "./ErorrPage";
import Products from "../adminView/Products";
import AddProduct from "../adminView/AddProduct";
import UpdateProduct from "../adminView/UpdateProduct";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  // const idLocal = localStorage.getItem("id");
  // const [id, setId] = useState(idLocal);

  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    console.log(decodedData);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }

  function logOut() {
    // localStorage.removeItem("id");
    localStorage.removeItem("token");
    // setId(null);
    navigate("/");
  }
  return (
    <div>
      {(function () {
        if (decodedData?.userType == "user" || decodedData == undefined) {
          return (
            <div>
              <div class="header1">
                <p class="header-text1">GET 15% OFF، USE CODE: GIFT </p>
              </div>
              <div class="header2">
                <ul class="nav1-right">
                  <div>
                    {decodedData?.id !== undefined ? (
                      <div>
                        <li>Welcome {decodedData.Fname} 💕 </li>
                        <li>
                          <a onClick={() => logOut()}>LogOut</a>
                        </li>
                        <li>
                          <Link to="/cart">
                            <a>Cart</a>
                          </Link>
                        </li>
                      </div>
                    ) : (
                      <div>
                        <li>
                          <Link to="/login">
                            <a>LogIn</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/signup">
                            <a>Sign Up</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart">
                            <a>Cart</a>
                          </Link>
                        </li>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
              <br></br>
              <div>
                <h2 class="title">PERFECT PERFUMES</h2>
              </div>

              <div class="header3">
                <ul class="navbar1">
                  <li class="mainNav1">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="mainNav">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li class="mainNav">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li class="mainNav">
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          );
        } else {
          return <AdminNavBar />;
        }
      })()}

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/display/:id" element={<Display />}></Route>
        <Route path="/products" element={<Products />}></Route>
         <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/update-product" element={<UpdateProduct />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;
