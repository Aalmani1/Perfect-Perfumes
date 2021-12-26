import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Carousel, Button } from "react-bootstrap";
import { CardGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import img1 from "../imgs/val.jpeg";
import img2 from "../imgs/dior.png";
import img3 from "../imgs/uomo.jpeg";
import img4 from "../imgs/prands.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import jwt_decode from "jwt-decode";

const MySwal = withReactContent(Swal);
const Toast = MySwal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 1300,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});

function Home() {
  const [bestSiller, setbestSiller] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [items, setItems] = useState(bestSiller);

  let decodedData;
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    console.log(decodedData);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      console.log(res.data);
      setbestSiller(res.data);
    });
    console.log(bestSiller);
  }, []);

  const addToCart = (item) => {
    // e.preventDefault();
    let items = item._id;
    let quantity = 1;
    console.log(items);
    // console.log(userId);

    if (decodedData == undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to Login First!",
        footer: '<a href="/login">Click Here to Login</a>',
      });
    } else {
      axios
        .post("http://localhost:3001/carts/create", {
          item: items,
          quantity: quantity,
          id: decodedData.id,
        })
        .then((res) => {
          console.log("add saccfully" + res);
          setAddItem([...addItem, res.data]);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(addItem);

      Toast.fire({
        icon: "success",
        title: "Added Successfully",
      });
    }
  };

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
                  <Link to={"/display/" + item._id}>
                    <Card.Img
                      variant="top"
                      src={item.img}
                      height="320px"
                      width="340px"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>
                      <h6 style={{ textAlign: "center" }}>{item.name}</h6>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                      Price: {item.price} SRA
                    </Card.Text>
                    <Button
                      onClick={() => {
                        addToCart(item);
                      }}
                      id="loginbtn"
                    >
                      Add To Cart
                    </Button>
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
