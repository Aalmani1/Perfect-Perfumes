import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/carts/show/61b59f0d27082b119a0c9b7e")
      .then((res) => {
        console.log(res.data.cart);
        setCartItems(res.data.cart);
        setLoad(false);
      });
    console.log(cartItems);
  }, []);

  if (load) {
    return <p>loading ......</p>;
  }
  return (
    <div>
      <div style={{ marginTop: "3%", textAlign: "center" }}>
        <div className="container">
          {cartItems.map((item) => {
            {
              console.log("item= ", item);
            }
            return (
              <div className="col1">
                <h6>Products</h6>
                <hr></hr>
                <div>
                  <h5>{item.items.name}</h5>
                </div>
              </div>
            );
          })}

          <div className="col2">
            <h6>Price</h6>
            <hr></hr>
            <div>
              <h5>test</h5>
            </div>
          </div>
          <div className="col3">
            <h6>Quantity</h6>
            <hr></hr>
            <div>
              <h5>test</h5>
            </div>
          </div>
          <div className="col4">
            <h6>Total</h6>
            <hr></hr>
            <div>
              <h5>100</h5>
            </div>
          </div>

          <div className="copon">
            <hr></hr>
            <form>
              <label>
                Copon:
                <input type="text" name="copon" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="total">
            <hr></hr>
            <h4>Total</h4>
            <hr></hr>
            <h6>VTA : 15%</h6>
            <h6>- copon</h6>
            <h4>Total</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
