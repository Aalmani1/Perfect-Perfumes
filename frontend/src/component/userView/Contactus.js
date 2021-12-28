import { Form, Button } from "react-bootstrap";
import img1 from "../imgs/imglogin.png";
import Footer from "./Footer";

function Contactus() {
  return (
    <div>
      <br></br>
      <img className="login-img" src={img1} />
      <div>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              type="text"
              placeholder="Message"
            />
          </Form.Group>

          <Button className="loginbtn" type="submit">
            Send
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
