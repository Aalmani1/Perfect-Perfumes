import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import img1 from "../imgs/prands.png";
import Footer from "./Footer";

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
                  </Card.Body>
                </CardGroup>
              );
            }
          })}
        </Row>
      </div>

      <div className="header-title2">
        <h5 className="header-text-title2">BRANDS YOU LOVE</h5>

        <img className="prands-img" src={img1} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
