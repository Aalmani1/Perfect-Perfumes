import { Carousel, Button, Card } from "react-bootstrap";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function Shop() {
  const [bestSiller, setbestSiller] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      setbestSiller(res.data);
    });
    console.log(bestSiller);
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: " 9%" }}>
        {bestSiller.map((item) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={item.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-title">{item._id}</p>
                  <h6 class="card-title">{item.name}</h6>
                  <h5 class="card-title">{item.brand}</h5>
                  <small class="text-muted">Price : {item.price}</small>
                </div>
                <Button id="loginbtn">Add To Cart</Button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
