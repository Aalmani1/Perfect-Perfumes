import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import errImg from "../imgs/error1img.png";
// import Home from "./Home";
import Footer from "./Footer";

function Error() {
  return (
    <div>
      <div className="err-col2">
        <img className="errorImg" src={errImg} />
      </div>
      <div className="err-col1">
        <div className="error">
          <h1>Ooops! </h1>
          <h1>nothing here ..</h1>
          <br></br>
          <Link to={"/"}>
            <Button style={{ background: "#c5269d" }}>Back To Home</Button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default Error;
