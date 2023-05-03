import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  // const activeLink = "border-b-[5px] rounded-[26%] w-[43%] border-[#7461e2]";
  // const activeLink = "border-b-[5px] border-[43%] border-[#7461e2]";
  const activeLink = "text-[#7461e2]";
  const normalLink = "";

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    // <!--Header-->
    <header className="flex w-full h-20 bg-[hsla(0,0%,100%,.4)] !bg-blue-800 !text-[rgb(81,81,81)] backdrop-blur-md z-10 fixed top-0">
      <div className="w-1/3 h-full flex items-center gap-2.5 pl-[38px]">
        <img src={logo} alt="UserImage" className="w-10 h-10" />
        <NavLink to={"/home"}>
          <h1
            style={{ letterSpacing: "2px" }}
            className="h-max mb-[3px] !text-2xl !text-black"
          >
            Tyler's Cafe
          </h1>
        </NavLink>
      </div>

      <div className="w-2/3 h-full flex justify-between pr-12">
        <ul
          id="optionList"
          className="h-full flex items-center justify-start gap-[60px]"
        >
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>

          <NavLink
            to={"/About"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>

          <NavLink
            to={"/Contact"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>

          <NavLink
            to={"/Profile"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Profile
          </NavLink>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={"0"} color="error">
              <ShoppingCartIcon className="!text-[rgb(81,81,81)]" />
            </StyledBadge>
          </IconButton>
        </ul>

        <div className="h-full flex items-center">
          <NavLink to={"/login"} style={{ height: "max-content" }}>
            <button className=" flex items-center gap-3 border border-slate-200 px-3 py-1 rounded-lg cursor-pointer">
              <LoginIcon className="!text-[20px]" />
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
