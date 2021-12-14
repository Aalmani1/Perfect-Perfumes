import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Contactus from "./Contactus";
import Cart from "./Cart";
import Display from "./Display";
import ErrorPage from "./ErorrPage";
function NavBar() {
  return (
    <div>
      <div class="header1">
        <p class="header-text1">GET 15% OFF، USE CODE: GIFT </p>
      </div>

      <div class="header2">
        <ul class="nav1-right">
          <li>
            <a href="/login">LogIn</a>
          </li>
          <li>
            <a href="/createaccount">Create Account</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createaccount" element={<CreateAccount />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/display/:id" element={<Display />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavBar;
