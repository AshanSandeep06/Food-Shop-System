import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const activeLink = "border-b-2 border-[rgb(81,81,81)]";
  const normalLink = "";

  return (
    // <!--Header-->
    <header className="flex w-full h-20 bg-[hsla(0,0%,100%,.4)] backdrop-blur-md z-10 fixed top-0 !text-[rgb(81,81,81)]">
      <div className="w-1/2 h-full flex items-center gap-2.5 pl-2">
        <img src={logo} alt="UserImage" className="w-10 h-10" />
        <h1 className="h-max mb-[3px] !text-black">My Profile</h1>
      </div>

      <div className="w-1/2 h-full pr-5">
        <ul className="h-full flex items-center justify-end gap-[60px]">
          <NavLink
            to={"/Home"}
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

          <NavLink to={"/"}>
            <LogoutIcon />
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
