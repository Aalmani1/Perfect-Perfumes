import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../imgs/imglogin.png";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function Login() {
  const navigate = useNavigate();
  async function addtoDB(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;

    let decodedData;

    await axios
      .post("/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.errors) {
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
          //   footer: '<a href="">Why do I have this issue?</a>',
          // });
          console.log("res =>", res.data.errors);
        } else {
          localStorage.setItem("token", res.data.token);
          // localStorage.setItem("id", res.data.user);
          // localStorage.getItem("token");

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

          Swal.fire(
            "Successfully Login!",
            ` Welcome 💕`,
            //  ` Welcome ${decodedData.Fname} 💕`,
            "success"
          );
          if (decodedData.userType == "admin") {
            navigate("/");
          } else {
            navigate("/home");
          }
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
