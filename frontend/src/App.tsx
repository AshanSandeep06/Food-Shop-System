import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Customer from "./components/Customer/Customer";

const App = () => {
  return (
    <div className="App">
      <a href="#" id="scroll_up_btn">
        <ArrowUpwardIcon />
      </a>

      <Header buttons={["Login"]} links={["home", "food-Menu", "contact"]} />
      {/* <Content /> */}
      {/* <Footer /> */}
      <Customer />
    </div>
  );
};

export default App;
