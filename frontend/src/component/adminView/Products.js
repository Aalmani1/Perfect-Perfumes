import { Button, Card } from "react-bootstrap";
// import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log(product);
  }, []);

  function DeleteItem(_id) {
    // e.preventDefault();
    // console.log("test button" + _id);
    axios.delete(`http://localhost:3001/products/${_id}/delete`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      // alert("Deleted Succsefully");
      Swal.fire("Deleted Succsefully", "", "success");
    });
  }

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 9%" }}>
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

                <Button onClick={() => DeleteItem(item._id)} variant="danger">
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
