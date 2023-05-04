import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Customer from "./components/Customer/Customer";
import LoginIcon from "@mui/icons-material/Login";

const App = () => {
  return (
    <div className="App">
      <a href="#" id="scroll_up_btn">
        <ArrowUpwardIcon />
      </a>

      {/* ========== Home Page ========== */}
      {/* <Header buttons={["Login"]} links={["home", "food-Menu", "contact"]}/> */}
      {/* <Content /> */}
      {/* <Footer /> */}

      {/* ========== Customer Page ========== */}
      <Header buttons={["Login", "Logout"]} links={["home", "food-Menu", "contact"]} />
      <Customer />
    </div>
  );
};

export default App;
