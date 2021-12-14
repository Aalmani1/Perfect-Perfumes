import { Carousel, Button, Card } from "react-bootstrap";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
    console.log(order);
  }, []);

  function DeleteItem(id) {
    // e.preventDefault();
    // console.log("test button" + id);
    axios.delete(`http://localhost:3001/products/${id}/delete`).then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
  }

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 9%" }}>
        {order.map((item) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{item.brand}</h6>
                  <h5 class="card-title">{item.name}</h5>
                  <small class="text-muted">Price : {item.price}</small>
                </div>

                <Button onClick={DeleteItem(item)} variant="danger">
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

export default Order;
