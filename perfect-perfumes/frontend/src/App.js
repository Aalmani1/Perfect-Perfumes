import "./App.css";
import {  Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/component/userView/Home";
import Shop from "../src/component/userView/Shop";
import Blog from "../src/component/userView/Blog";
import Login from "../src/component/userView/Login";
import Signup from "../src/component/userView/Signup";
import Contactus from "../src/component/userView/Contactus";
import Cart from "../src/component/userView/Cart";
import Display from "../src/component/userView/Display";
import ErrorPage from "../src/component/userView/ErorrPage";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/76/76180.png"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://cdn-icons-png.flaticon.com/512/76/76180.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
