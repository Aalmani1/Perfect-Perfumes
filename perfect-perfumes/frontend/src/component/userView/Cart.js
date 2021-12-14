import Footer from "./Footer";
function Cart() {
  return (
    <div>
      <div style={{ marginTop: "3%", textAlign: "center" }}>
        <div className="container">
          <div className="col1">
            <h6>Products</h6>
            <hr></hr>
            <div>
              <h5>test</h5>
            </div>
          </div>
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

// <div class="div-cart">
// <table style={{ width: "100%" }}>
//   <tr>
//     <th>
//       Item <hr></hr>
//     </th>

//     <th>
//       Price <hr></hr>
//     </th>
//     <th>
//       Quantity <hr></hr>
//     </th>
//     <th>
//       Total <hr></hr>
//     </th>
//   </tr>
// </table>
// </div>
