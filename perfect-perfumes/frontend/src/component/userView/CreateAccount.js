import { Form, Button } from "react-bootstrap";
import img1 from "../imgs/imglogin.png";

function CreateAccount() {
  return (
    <div>
      <img className="login-img" src={img1} />
      <div>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Enter your phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="Fname" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Lname" placeholder="Enter last name" />
          </Form.Group>

          <Button className="loginbtn" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateAccount;
