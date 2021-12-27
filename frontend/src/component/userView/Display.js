// import NavBar from "./NavBar";
import Footer from "./Footer";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { CardGroup, Row } from "react-bootstrap";
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

function Display() {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [addItem, setAddItem] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

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
  let opj = {
    product,
  };
  return (
    <div>
      <div className="container">
        {product && (
          <>
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
              <Button
                onClick={() => {
                  addToCart(product);
                }}
                id="loginbtn"
              >
                Buy Now
              </Button>
            </div>
          </>
        )}
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

      <Footer />
    </div>
  );
}
export default Display;
