
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../imgs/imglogin.png";
import jwt_decode from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  async function addtoDB(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;

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

    await axios
      .post("http://localhost:3001/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          localStorage.setItem("token", res.data.token);
          // localStorage.setItem("id", res.data.user);
          navigate("/");
        }
      });
  }
  return (
    <div>
      <img className="login-img" src={img1} />
      <div>
        <Form
          className="login-form"
          onSubmit={(e) => {
            addtoDB(e);
          }}
        >
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
