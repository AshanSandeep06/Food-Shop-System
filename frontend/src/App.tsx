import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Customer from "./components/Customer/Customer";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import Button from "./components/Button/Button";

const App = () => {
  const loginLink = <Button resource="login" icon={<LoginIcon className="!text-[20px]" />} />
  const logoutLink = <Button resource="login" icon={<LogoutIcon className="!text-[20px]" />} />

  return (
    <div className="App">
      <a href="#" id="scroll_up_btn">
        <ArrowUpwardIcon />
      </a>

      {/* ========== Home Page ========== */}
      {/* <Header buttons={[loginLink]} links={["home", "food-Menu", "contact"]} /> */}
      {/* <Content /> */}
      {/* <Footer /> */}

      {/* ========== Customer Page ========== */}
      <Header buttons={[logoutLink]} links={["home", "food-Menu", "contact"]} />
      <Customer />
    </div>
  );
};

export default App;
