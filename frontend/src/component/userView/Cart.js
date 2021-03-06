import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import errImg from "../imgs/error1img.png";
// import { Elements } from "@stripe/react-stripe-js";
// import Payment from "./PaymentForm";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [load, setLoad] = useState(true);
  // const userId = localStorage.getItem("id");
  const navigate = useNavigate();

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
      axios.get(`/carts/show/${decodedData.id}`).then((res) => {
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

    axios.delete(`/carts/delete/${decodedData.id}/${id}`).then((res) => {
      console.log(res.data);
      setCartItems(res.data.cart);
      setTotal(res.data.total);
      setLoad(false);
    });
  }

  function checkout(token, addresses) {
    axios
      .post("/orders/create", { userId: decodedData.id })

      .then(async (res) => {
        try {
          const res = await axios.post("/payment", {
            tokenId: token.id,
            amount: total * 3.75 * 100,
          });
        } catch (error) {}

        console.log(res);
        Swal.fire({
          title: "Congratulations",
          text: "Successfully purchased",
          icon: "success",
          didClose: () => {
            navigate("/");
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (cartItems == undefined || cartItems.length == 0) {
    {
      console.log(cartItems);
    }
    return (
      <div>
        <div className="container-empty">
          <div>
            <img
              className="empty-img"
              src={"http://www.brushaplush.com/assets/img/icon/emptybag3.png"}
            />
          </div>
        </div>
        <div className="container-empty2">
          <Link to={"/shop"}>
            <Button style={{ background: "#c5269d" }}>Go to Shop</Button>
          </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  } else {
    {
      console.log(cartItems);
    }
    return (
      <div>
        {(function () {
          if (decodedData == undefined) {
            return <h3>no cart register or login first</h3>;
          } else {
            return (
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
                            style={
                              ({ textAlign: "center" }, { marginLeft: "13%" })
                            }
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
                  //copon form
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
                    <h5> With out VAT 15% : {total}</h5>

                    <h5 style={{ textAlign: "right" }}>
                      With VAT 15% : {Math.floor(total * 1.15)}
                    </h5>
                  </div>

                  <div className="cheakout">
                    <StripeCheckout
                      stripeKey="pk_test_51KAtlhJHCqAHPYsNWex3D5EejBTK2ghLo1NsmSZS2bTcviOBXCnjVuNNrlm8DkL3o3aV7E7BfhsOFHTOeXvC3lg800V3rLmCic"
                      token={checkout}
                      billingAddress
                      shippingAddress
                      amount={Math.floor((total * 1.15) / 3.75) * 100}
                      // name={cartItems}
                    >
                      <Button id="cheakout">Checkout</Button>
                    </StripeCheckout>
                  </div>
                </div>
              </div>
            );
          }
        })()}

        <Footer />
      </div>
    );
  }
}

export default Cart;
