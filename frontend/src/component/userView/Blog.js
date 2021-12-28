import { Button } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import img1 from "../imgs/imglogin.png";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div>
      <div>
        <div>
          <img className="blogImg" src={img1} />
        </div>
        <div className="error">
          <h2>Blog test</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          marginLeft: "8%",
          marginRight: "8%",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "260px" }}
                src="https://5.imimg.com/data5/ML/OS/MY-2195508/bouquet-fragrances-500x500.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Cyber Monday: Find your futuristic scent
                </Card.Title>
                <Card.Text>
                  Ok, so there’s nothing quite as fitting to Cyber Monday as
                  Paco Rabanne Phantom. When it comes to futuristic fragrances
                  and being ahead-of-the-game, Paco do it and they do it right!
                  Step into the Paco Galaxy and join an intergalactic party
                  with...
                </Card.Text>
                <Button id="loginbtn">Reade More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "260px" }}
                src="https://www.thefragranceshop.co.uk/blog/wp-content/uploads/2021/05/Women-blog-1200x600-1-1140x600.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  THE BEST DESIGNER PERFUMES TO EMPOWER WOMEN
                </Card.Title>
                <Card.Text>
                  The beloved narciso rodriguez for her is now intensified in
                  the new for her MUSC NOIR For her MUSC NOIR wraps the
                  original’s unique Chypre Musk blend in further mystery with a
                  Plum invitation For her MUSC NOIR wraps the original’s unique
                  Chypre Musk...
                </Card.Text>
                <Button id="loginbtn">Reade More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "260px" }}
                src="https://www.thefragranceshop.co.uk/blog/wp-content/uploads/2021/11/BF-shopping.jpg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  Tips and tricks to make sure you get the best deals in the
                  biggest sales of the year.
                </Card.Title>
                <Card.Text>
                  We know sale shopping can all be very exciting, and it’s easy
                  to get carried away. But that doesn’t mean you need to buy
                  every fantastic deal you come across (sorry). Work out roughly
                  how much money ...
                </Card.Text>
                <Button id="loginbtn">Reade More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
