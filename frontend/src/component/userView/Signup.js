import { Form, Button } from "react-bootstrap";
// import { Navigate } from "react-router";
import img1 from "../imgs/imglogin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  async function addtoDB(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;
    let phoneNumber = e.target[2].value;
    let Fname = e.target[3].value;
    let Lname = e.target[4].value;

    // try {
    await axios
      .post("/users/signup", {
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        Fname: Fname,
        Lname: Lname,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("id", res.data.user);
          navigate("/");
        }
      });

    // if (data.errors) {
    // console.log(errors);
    // }

    //   if (data.user) {
    //     Navigate.assign("./");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
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
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              for="phoneNumber"
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="Fname"
              placeholder="Enter first name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="Lname" placeholder="Enter last name" required />
          </Form.Group>

          <Button className="loginbtn" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
