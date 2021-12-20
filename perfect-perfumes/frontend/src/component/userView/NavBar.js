import ReactDOM from "react-dom";
import {  Routes, Route, useNavigate } from "react-router-dom";
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
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const idLocal = localStorage.getItem("id");
  const [id, setId] = useState(idLocal);
  function logOut() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setId(null);
    navigate("/");
  }
  return (
    <div>
      <div class="header1">
        <p class="header-text1">GET 15% OFF، USE CODE: GIFT </p>
      </div>

      <div class="header2">
        <ul class="nav1-right">
          <div>
            {id !== null ? (
              <div>
                <li>Welcome </li>
                <li>
                  <a onClick={() => logOut()}>LogOut</a>
                </li>
                <li>
                <a href="/cart">Cart</a>
              </li>
              </div>
            ) : (
              <div>
                <li>
                  <a href="/login">LogIn</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
                <li>
                  <a href="/cart">Cart</a>
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
            <a href="/">Home</a>
          </li>
          <li class="mainNav">
            <a href="/shop">Shop</a>
          </li>
          <li class="mainNav">
            <a href="/blog">Blog</a>
          </li>
          <li class="mainNav">
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </div>

    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/display/:id" element={<Display />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </div>
  );
}

export default NavBar;
