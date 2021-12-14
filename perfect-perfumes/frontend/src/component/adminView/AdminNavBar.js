import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import Oreders from "./Oreders";

function AdminNavBar() {
  return (
    <div>
      <div>
        <h2 class="admin-title">PERFECT PERFUMES</h2>
      </div>

      <div class="header3">
        <ul class="navbar1">
          <li class="adminNav1">
            <a href="/oreders">Oreders</a>
          </li>
          <li class="mainNav">
            <a href="/products">Products</a>
          </li>
          <li class="mainNav">
            <a href="/add-product">Add Product</a>
          </li>
          <li class="mainNav">
            <a href="/update-product">Update Product</a>
          </li>
          <li class="mainNav">
            <a href="/update-user">Update User</a>
          </li>
          <li class="mainNav">
            <a href="/delete-user">Delete User</a>
          </li>
        </ul>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/oreders" element={<Oreders />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
          <Route path="/update-product" element={<UpdateProduct />}></Route>
          <Route path="/update-user" element={<UpdateUser />}></Route>
          <Route path="/delete-user" element={<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AdminNavBar;
