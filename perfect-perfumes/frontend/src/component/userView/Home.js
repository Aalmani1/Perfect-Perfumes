import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Carousel, Button } from "react-bootstrap";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import img1 from "../imgs/val.jpeg";
import img2 from "../imgs/dior.png";
import img3 from "../imgs/uomo.jpeg";
import img4 from "../imgs/prands.png";

function Home() {
  const [bestSiller, setbestSiller] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      setbestSiller(res.data);
    });
    console.log(bestSiller);
  }, []);

  let arr = [];
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="header-title2">
        <h3 className="header-text-title2">Best Siller</h3>
      </div>
      <div className="best-siller-card">
        <Row xs={1} md={3} className="g-4">
          {bestSiller.map((item, idx) => {
            arr.push(item);

            if (arr.length < 7) {
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

      <div className="header-title2">
        <h3 className="header-text-title2">BRANDS YOU LOVE</h3>

        <img className="prands-img" src={img4} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
