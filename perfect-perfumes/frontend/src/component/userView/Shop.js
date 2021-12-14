import { Carousel, Button, Card } from "react-bootstrap";
import { CardGroup, Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Shop() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      setproduct(res.data);
    });
    console.log(product);
  }, []);

  const addToCart = (item) => {
    // alert("Add Saccfully");
  };

  return (
    <div>
      <div className="container">
        <div className="shop-col1">
          <h5>FILTERS:</h5>
          <br></br>
          <h6>Gender</h6>
          <Dropdown as={ButtonGroup}>
            <Button style={{ background: "#c5269d" }}>Please select</Button>

            <Dropdown.Toggle
              split
              style={{ background: "#c5269d" }}
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Femail</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Male</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br></br>
          <br></br>
          <h6>Price</h6>
          <Dropdown as={ButtonGroup}>
            <Button style={{ background: "#c5269d" }}>Please select</Button>

            <Dropdown.Toggle
              split
              style={{ background: "#c5269d" }}
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">
                Price (High to Low)
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Price (Low to High)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="shop-col2">
          <div
            class="row row-cols-1 row-cols-md-3 g-4"
            style={{ margin: " 3%" }}
          >
            {product.map((item) => {
              return (
                <div class="col">
                  <div class="card h-100">
                    <Link to={"/display/" + item._id}>
                      <img src={item.img} class="card-img-top" alt="..." />
                    </Link>
                    <div class="card-body">
                      <h6 class="card-title">{item.brand}</h6>
                      <h5 class="card-title">{item.name}</h5>
                      <small class="text-muted">Price : {item.price}</small>
                    </div>
                    <Button onClick={addToCart(item)} id="loginbtn">
                      Add To Cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
