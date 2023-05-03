import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="footer" className="columns-1 bg-[#16168B]">
      <nav className="">
        <menu className="xl:columns-10 md:columns-5 justify-center text-center">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
        </menu>
      </nav>

      <aside className="">
        <h1>Easy Car Rental (Pvt) Ltd</h1>
        <h5>
          <i
            style={{ marginRight: "5px" }}
            className="fa-sharp fa-solid fa-location-dot"
          ></i>{" "}
          Galle, Sri Lanka
        </h5>
        <h5>
          <i
            style={{ marginRight: "5px" }}
            className="fa-sharp fa-solid fa-envelope"
          ></i>{" "}
          info@example.com
        </h5>
        <h5>
          <i
            style={{ marginRight: "5px" }}
            className="fa-solid fa-phone-volume"
          ></i>{" "}
          +914579233
        </h5>
      </aside>

      <div className="">
        <i className="fa-regular fa-copyright"></i>
        <small>
          Copyright 2023 Easy Car Rental (Pvt) Ltd. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
