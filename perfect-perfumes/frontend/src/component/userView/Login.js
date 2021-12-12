import { Form, Button } from "react-bootstrap";
import img1 from "../imgs/imglogin.png";

function Login() {
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button className="loginbtn" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
