import { Button, Card } from "react-bootstrap";
// import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((res) => {
      console.log(res.data);
      setOrder(res.data);
    });
    // console.log(order);
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
            <div>
              <Card>
                <Card.Header as="h5">Order ID</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="danger">Cancel Order</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
