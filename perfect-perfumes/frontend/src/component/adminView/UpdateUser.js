import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Row, Col, Button, Form } from "react-bootstrap";

function UpdateUser() {
  return (
    <div className="AdminAddItem">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>refrence Id</Form.Label>
          <Form.Control type="Number" placeholder="Enter refrence Id" />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Number" placeholder="Enter Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fisrt Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name " />
        </Form.Group>

        <Button className="logbutton" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default UpdateUser;
