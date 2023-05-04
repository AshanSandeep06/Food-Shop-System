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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const App = () => {
  const loginLink = (
    <Button resource="login" icon={<LoginIcon className="!text-[20px]" />} />
  );
  const logoutLink = (
    <Button resource="logout" icon={<LogoutIcon className="!text-[20px]" />} />
  );
  const myProfileButton = (
    <Button
      resource="my Profile"
      icon={<AccountCircleIcon className="!text-[20px]" />}
    />
  );

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
      <Header
        buttons={[logoutLink, myProfileButton]}
        links={["home", "pending Orders", "orders History"]}
      />
      <Customer />
    </div>
  );
};

export default App;
