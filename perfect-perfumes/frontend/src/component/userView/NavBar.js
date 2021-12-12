import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import img1 from "../imgs/val.jpeg";
import img2 from "../imgs/dior.png";
import img3 from "../imgs/uomo.jpeg";

function NavBar() {
  return (
    <div>
      <div class="header1">
        <p class="header-text1">GET 15% OFF، USE CODE: GIFT </p>
      </div>

      <div class="header2">
        <ul class="nav1-right">
          <li>
            <a href="#home">LogIn</a>
          </li>
          <li>
            <a href="#news">Create Account</a>
          </li>
          <li>
            <a href="#contact">Cart</a>
          </li>
        </ul>
      </div>
      <br></br>
      <div>
        <h2 class="title">PERFECT PERFUMES</h2>
      </div>

      <div class="header3">
        <ul class="navbar1">
          <li class="mainNav1">
            <a href="#home">Home</a>
          </li>
          <li class="mainNav">
            <a href="#news">Shop</a>
          </li>
          <li class="mainNav">
            <a href="#contact">Blog</a>
          </li>
          <li class="mainNav">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Home />
    </div>
  );
}

export default NavBar;
