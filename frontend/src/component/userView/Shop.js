import { Button } from "react-bootstrap";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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

function Shop() {
  const [product, setproduct] = useState([]);
  const [addItem, setAddItem] = useState([]);
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  // const userId = localStorage.getItem("id");

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
    console.log("product");
    console.log(product);

    // console.log("items from use efect ===>", items);
  }, [product]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      // console.log(res.data);
      setproduct(res.data);
      setItems(res.data);
      setAllItems(res.data);
    });
    // console.log("items from use efect ===>", items);
  }, []);

  const selectPrice = (selectedPrice) => {
    let item = [];
    let item2 = [];
    // console.log(selectedPrice);

    if (selectedPrice == "hightToLow") {
      console.log("Clicked Hight to low");

      let highestToLowest = items.sort(function (a, b) {
        return b.price - a.price;
      });
      item.push(...highestToLowest);
      console.log(product);

      setItems(item);
      // console.log("items from use highest To Low ===>", items);
    } else if (selectedPrice == "lowToHigh") {
      console.log("Clicked low to high");
      let lowestToHighest = items.sort(function (a, b) {
        return a.price - b.price;
      });
      item2.push(...lowestToHighest);
      console.log(product);

      setItems(item2);
    } else if (selectedPrice === "") {
      axios.get("http://localhost:3001/products").then((res) => {
        // console.log(res.data);
        setproduct(res.data);
        setItems(res.data);
        setAllItems(res.data);
      });
    }
  };

  const selectGender = (gender) => {
    // console.log(gender);
    let item = [];
    for (let i = 0; i < product.length; i++) {
      if (product[i].gender == gender) {
        item.push(product[i]);
        setItems(item);
      }
      //function for view all
      else if (gender == "") {
        setItems(product);
        // console.log(product);

        // console.log("all items ", product);
      }
    }
  };

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
      // alert("Add Saccfully");
      // alertify.success("Add Successfully");

      // Swal.fire({
      //   icon: "success",
      //   title: "Add Successfully",
      //   showCancelButton: false,
      //   showConfirmButton: false,
      //   timer: 1500,
      //   // didClose=()=>{
      //   //   Navigate('/')
      //   // }
      // });

      Toast.fire({
        icon: "success",
        title: "Added Successfully",
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="shop-col1">
          <h5>FILTERS:</h5>
          <br></br>
          <h6>Gender</h6>

          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              style={{ background: "#c5269d" }}
              id="dropdown-basic"
            >
              Please select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  selectGender("");
                }}
              >
                Select All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  selectGender("female");
                }}
              >
                Femail
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  selectGender("male");
                }}
              >
                Male
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br></br>
          <br></br>
          <h6>Price</h6>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              style={{ background: "#c5269d" }}
              id="dropdown-basic"
            >
              Please select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  selectPrice("");
                }}
              >
                Select All
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  selectPrice("hightToLow");
                }}
              >
                Price (High to Low)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  selectPrice("lowToHigh");
                }}
              >
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
            {items.map((item) => {
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

                    <Button
                      onClick={() => {
                        addToCart(item);
                      }}
                      id="loginbtn"
                    >
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
