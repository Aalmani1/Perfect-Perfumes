import { Button, Card } from "react-bootstrap";
// import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import withReactContent from "sweetalert2-react-content";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/products").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log(product);
  }, []);

  function DeleteItem(_id) {
    // e.preventDefault();
    // console.log("test button" + _id);
    axios.delete(`/products/${_id}/delete`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      // alert("Deleted Succsefully");
      Swal.fire("Deleted Succsefully", "", "success");
    });
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Product</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 10%" }}>
        {product.map((item) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p>ID: {item._id} </p>
                  <h6 class="card-title">{item.brand}</h6>
                  <h5 class="card-title">{item.name}</h5>
                  <small class="text-muted">Price : {item.price}</small>
                </div>
                <Link to={"/update-product/" + item._id}>
                  <Button style={{ width: "100%" }} variant="secondary">
                    update
                  </Button>
                </Link>
                <Button
                  style={{ width: "90%", marginLeft: "5%" }}
                  onClick={() => DeleteItem(item._id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
