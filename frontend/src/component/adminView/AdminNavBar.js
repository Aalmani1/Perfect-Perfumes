// import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import Oreders from "./Oreders";
import ErrorPage from "../userView/ErorrPage";
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function AdminNavBar() {
  const navigate = useNavigate();
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
    Swal.fire("LogOut successfully!", "See you soon", "success");
    navigate("/");
  }

  return (
    <div>
      <div>
        <h2 class="admin-title">PERFECT PERFUMES</h2>
        <h4 class="admin-title" style={{ color: "#720875" }}>
          Admin dashboard
        </h4>
      </div>

      <div class="header3">
        <ul
          class="navbar1"
          className="navbar1admin"
          style={{ backgroundColor: "rgb(223, 189, 204)" }}
        >
          <li class="mainNav" style={{ marginLeft: "15%" }}>
            <Link to="/products">Products</Link>
          </li>
          <li class="mainNav">
            <Link to="/add-product">Add Product</Link>
          </li>
          <li class="mainNav">
            <Link to="/update-product">Update Product</Link>
          </li>
          <li class="adminNav1">
            <Link to="/oreders">Oreders</Link>
          </li>

          <li class="mainNav">
            <Link to="/update-user">Update User</Link>
          </li>
          <li class="mainNav">
            <Link to="/delete-user">Delete User</Link>
          </li>

          <li style={{ backgroundColor: "#b30000" }}>
            <Link to="/" onClick={() => logOut()}>
              LogOut
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/update-product" element={<UpdateProduct />}></Route>
        <Route path="/oreders" element={<Oreders />}></Route>
        <Route path="/update-user" element={<UpdateUser />}></Route>
        <Route path="/delete-user" element={<DeleteUser />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default AdminNavBar;
