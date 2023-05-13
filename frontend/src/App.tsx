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
import MyButton from "./components/MyButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Admin from "./components/Admin/Admin";

const App = () => {
  const style1 =
    "flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg";
  const style2 =
    "flex items-center gap-3 px-[15px] py-[6px] rounded-[6px] bg-blue-700 !text-white";

  const loginLink = (
    <MyButton
      key={1}
      resource="login"
      icon={<LoginIcon className="!text-[20px]" />}
      styles={style1}
    />
  );
  const logoutLink = (
    <MyButton
      key={2}
      resource="logout"
      icon={<LogoutIcon className="!text-[20px]" />}
      styles={style1}
    />
  );
  const myProfileButton = (
    <MyButton
      key={3}
      resource="my Profile"
      icon={<AccountCircleIcon className="!text-[20px]" />}
      styles={style2}
    />
  );

  return (
    <div className="App">
      <a href="#" id="scroll_up_btn">
        <ArrowUpwardIcon />
      </a>

      {/* ========== Home Page ========== */}
      {/* <Header
        buttons={["login", "register"]}
        links={["home", "food_Menu", "contact"]}
      />
      <Content />
      <Footer /> */}

      {/* ------------------------------------------------------------------------------------ */}

      {/* ========== Customer Page ========== */}
      <Header
        buttons={["Logout", "My Profile"]}
        links={["home", "pending_orders", "orders_history"]}
      />
      <Customer />

      {/* ------------------------------------------------------------------------------------ */}

      {/* ========== Admin Page ========== */}
      {/* <Header
        buttons={[logoutLink]}
        links={[
          "home",
          "manage_customer",
          "manage_item",
          "place_order",
          "order_requests",
        ]}
      /> */}
      {/* <Admin /> */}

      {/* ------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default App;
