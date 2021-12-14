import NavBar from "./NavBar";
import Footer from "./Footer";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Carousel, Button } from "react-bootstrap";
import { CardGroup, Row, Col } from "react-bootstrap";

function Display() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`).then((res) => {
      // console.log(res.data.product);
      setproduct(res.data.product);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/products`).then((res) => {
      // console.log(res.data.product);
      setAllProduct(res.data);
    });
  }, []);
  let arr = [];
  return (
    <div>
      <div className="container">
        <div className="display-img">
          <img className="imd-display" src={product.img} />
        </div>
        <div className="display-content">
          <h3>{product.brand}</h3>
          <br></br>
          <h2>{product.name}</h2>
          <p>{product.description} </p>
          <h6>For {product.gender} </h6>
          <h6>Size: {product.size} </h6>
          <h4> {product.price} SRA</h4>
          <br></br>
          <br></br>
          <br></br>
          <Button id="loginbtn">Buy Now</Button>
        </div>
      </div>

      <div className="header-title2">
        <h3 className="header-text-title2">You May Also Like</h3>
      </div>
      <div className="best-siller-card">
        <Row xs={1} md={3} className="g-4">
          {allProduct.map((item, idx) => {
            arr.push(item);

            if (arr.length < 4) {
              return (
                <CardGroup className="CardGroup">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    height="310px"
                    width="330px"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6 style={{ textAlign: "center" }}>{item.name}</h6>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                      Price: {item.price} SRA
                    </Card.Text>
                    <Button id="loginbtn">Add To Cart</Button>
                  </Card.Body>
                </CardGroup>
              );
            }
          })}
        </Row>
      </div>

      <Footer />
    </div>
  );
}
export default Display;
