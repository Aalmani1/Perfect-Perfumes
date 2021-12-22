import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Carousel, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [load, setLoad] = useState(true);
  // const userId = localStorage.getItem("id");

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

  useEffect(() => {
    console.log(decodedData);
    if (decodedData == undefined) {
      return <h3>noo</h3>;
    } else {
      axios
        .get(`http://localhost:3001/carts/show/${decodedData.id}`)
        .then((res) => {
          console.log("data " + res.data);
          setCartItems(res.data.cart);
          setTotal(res.data.total);
          setLoad(false);
        });
      console.log(cartItems);
    }
  }, []);

  function deleteItem(id) {
    console.log("delete button", id);

    axios
      .delete(`http://localhost:3001/carts/delete/${decodedData.id}/${id}`)
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data.cart);
        setTotal(res.data.total);
        setLoad(false);
      });
  }
  if (load) {
    return <h4>Nothing here</h4>;
  }

  function checkout(){
    Swal.fire(
      'Congaraduations',
      'Your byment succsess',
      'success'
    )
  }

  return (
    <div>
      {decodedData == undefined ? (
        <h3>no cart register or login first</h3>
      ) : (
        <div style={{ marginTop: "3%", textAlign: "center" }}>
          <div className="container">
            <div className="col1">
              <h6>Products</h6>
              <hr></hr>
            </div>
            <div className="col2">
              <h6>Price</h6>
              <hr></hr>
            </div>

            <div className="col3">
              <h6>Quantity</h6>
              <hr></hr>
            </div>

            <div className="col4">
              <h6>Total</h6>
              <hr></hr>
            </div>
          </div>
          {cartItems.map((item) => {
            return (
              <div>
                <div className="container-cart">
                  <div className="cart-col1">
                    <button
                      style={{ marginRight: "9%" }}
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        deleteItem(item.items._id);
                      }}
                    >
                      X
                    </button>

                    
                    <img style={{ width: "10%" }} src={item.items.img} />
                    <h6
                      style={({ textAlign: "center" }, { marginLeft: "13%" })}
                    >
                      {item.items.name}
                    </h6>
                  </div>
                  <div className="cart-col2">
                    <h6>{item.items.price}</h6>
                  </div>

                  <div className="cart-col3">
                    <h6>{item.quantity}</h6>
                  </div>

                  <div className="cart-col4">
                    <h6>{item.subtotal}</h6>
                  </div>
                </div>
                <hr className="hr-cart"></hr>
              </div>
            );
          })}
          {
            // <div className="copon">
            //   <form>
            //     <label>
            //       Copon:
            //       <input type="text" name="copon" />
            //     </label>
            //     <input type="submit" value="Submit" />
            //   </form>
            // </div>
          }
          <div className="total">
            <div className="cartTotal">
              <h3>Total </h3>
              <h5> With out VTA 15% : {total}</h5>

              <h5 style={{ textAlign: "right" }}>
                With VTA 15% : {Math.floor(total * 1.15)}
              </h5>
            </div>
            <Button onClick={()=>{checkout()}} style={{ width: "80%" }} id="loginbtn">
              CheckOut
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
