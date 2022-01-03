import "./App.css";
// import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/userView/NavBar";
import AdminNavBar from "./component/adminView/AdminNavBar";
import jwt_decode from "jwt-decode";

function App() {
  let decodedData;

  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    decodedData = jwt_decode(storedToken, { payload: true });
    console.log("appppppp");
    console.log(decodedData);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.removeItem("token");
    }
  }
  return (
    <div className="App">
      {(function () {
        if (decodedData?.userType == "admin") {
          return <AdminNavBar />;
        } else if (
          decodedData?.userType == "user" ||
          decodedData == undefined
        ) {
          return <NavBar />;
        }
      })()}
    </div>
  );
}

export default App;
