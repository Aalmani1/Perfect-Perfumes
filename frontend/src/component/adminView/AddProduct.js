import axios from "axios";
import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/carousel";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AddProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products/create").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    console.log(product);
  }, []);

  function add(e) {
    e.preventDefault();

    let brand = e.target[0].value;
    let name = e.target[1].value;
    let description = e.target[2].value;
    let img = e.target[3].value;
    let size = e.target[4].value;
    let price = e.target[5].value;
    let gender = e.target[6].value;

    console.log(e);
    console.log(product);

    axios
      .post("http://localhost:3001/products/create", {
        brand: brand,
        name: name,
        description: description,
        img: img,
        size: size,
        price: price,
        gender: gender,
      })

      .then((res) => {
        console.log("add suc" + res);
        setProduct([...product, res.data]);
      })
      .catch(function (error) {
        console.log(error);
      });

    Swal.fire("Add Succsesfull", "", "success");
  }
  return (
    <div className="AdminAddItem">
      <Form
        onSubmit={(e) => {
          add(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Enter Brand" />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Perfume Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Perfume Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Image " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Size</Form.Label>
          <Form.Control type="number" placeholder="Enter Size " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender " />
        </Form.Group>

        <Button className="logbutton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddProduct;
