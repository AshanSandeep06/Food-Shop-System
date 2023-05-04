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

const App = () => {
  const loginLink = (
    <NavLink
      id="loginContainer"
      to={"/login"}
      style={{ height: "max-content" }}
    >
      <button className=" flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg cursor-pointer">
        <LoginIcon className="!text-[20px]" />
        Login
      </button>
    </NavLink>
  );

  const logoutLink = (
    <NavLink
      id="loginContainer"
      to={"/logout"}
      style={{ height: "max-content" }}
    >
      <button className=" flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg cursor-pointer">
        <LogoutIcon className="!text-[20px]" />
        Logout
      </button>
    </NavLink>
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
      <Header buttons={[logoutLink]} links={["home", "food-Menu", "contact"]} />
      <Customer />
    </div>
  );
};

export default App;
