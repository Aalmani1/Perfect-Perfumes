import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function UpdateProduct() {
  const [product, setProduct] = useState([]);
  const [Id, setID] = useState();
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [gender, setGender] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      // console.log(res.data);
      setProduct(res.data);
    });
  }, []);

  function updateItem(e, id) {
    e.preventDefault();
    setID(id);
  }

  function putData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/products/${Id}/update`, {
        id: Id,
        brand: brand,
        name: name,
        description: description,
        img: img,
        size: size,
        price: price,
        gender: gender,
      })

      .then((res) => {
        console.log(res);
        setProduct(res.data);

        Swal.fire("Updated Succsefully", "", "success");
      });
  }

  return (
    <div className="AdminAddItem">
      <Form
        onSubmit={(e) => {
          putData(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> ID: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setID(e.target.value);
            }}
            type="text"
            placeholder="Enter ID "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            type="text"
            placeholder="Enter Name of the brand"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Perfumes Name: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter Perfumes Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Perfumes description: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Enter Perfume description"
          />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Perfume Img</Form.Label>
          <Form.Control
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="text"
            placeholder="Enter Perfume Img"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Size</Form.Label>
          <Form.Control
            onChange={(e) => {
              setSize(e.target.value);
            }}
            type="text"
            placeholder="Enter Perfume Size"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Perfume Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </Form.Group>

        <Button className="logbutton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateProduct;
