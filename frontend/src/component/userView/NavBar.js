import AdminNavBar from "../adminView/AdminNavBar";
// import ReactDOM from "react-dom";
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
import Oreders from "../adminView/Oreders";
import AddProduct from "../adminView/AddProduct";
import UpdateProduct from "../adminView/UpdateProduct";
import UpdateUser from "../adminView/UpdateUser";
import DeleteUser from "../adminView/DeleteUser";
// import { useState } from "react";
import jwt_decode from "jwt-decode";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

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
    Swal.fire("LogOut successfully!", "See you soon 💕", "success");
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
                  <div className="nav1">
                    {decodedData?.id !== undefined ? (
                      <div>
                        <li style={{ marginLeft: "2%" }}>
                          {" "}
                          Welcome {decodedData.Fname} 💕{" "}
                        </li>
                        <br></br>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/" onClick={() => logOut()}>
                            LogOut
                          </Link>
                        </li>
                      </div>
                    ) : (
                      <div>
                        <li>
                          <Link to="/login">LogIn</Link>
                        </li>
                        <li>
                          <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
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
                <br></br>
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
        <Route path="/update-user" element={<UpdateUser />}></Route>
        <Route path="/delete-user" element={<DeleteUser />}></Route>
        <Route path="/oreders" element={<Oreders />}></Route>
        <Route path="user/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;
