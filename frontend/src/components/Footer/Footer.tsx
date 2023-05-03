import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="columns-1 bg-[#f9f9f9] !text-[#515151] flex flex-col gap-2"
    >
      <nav className="">
        <menu className="flex justify-center text-center gap-16">
          {/* xl:columns-2 md:columns-2 */}
          <li className="flex justify-center">
            <FacebookIcon className="!text-[38px]" />
          </li>
          <li className="flex justify-center">
            <InstagramIcon className="!text-[38px]" />
          </li>
          <li className="flex justify-center">
            <TwitterIcon className="!text-[38px]" />
          </li>
          <li className="flex justify-center">
            <GitHubIcon className="!text-[38px]" />
          </li>
          <li className="flex justify-center">
            <LinkedInIcon className="!text-[38px]" />
          </li>
        </menu>
      </nav>

      <aside className="">
        <h1 style={{ letterSpacing: "2px", marginBottom: "2px" }}>
          Tyler's Cafe Inn
        </h1>
        <h5>
          <PlaceIcon style={{ marginRight: "5px", fontSize: "19px" }} />
          Galle, Sri Lanka
        </h5>
        <h5>
          <EmailIcon style={{ marginRight: "5px", fontSize: "19px" }} />
          info@example.com
        </h5>
        <h5>
          <WifiCalling3Icon style={{ marginRight: "5px", fontSize: "19px" }} />
          +914579233
        </h5>
      </aside>

      <div className="">
        <i className="fa-regular fa-copyright"></i>
        <small>Copyright 2023 Tyler's Cafe Inn. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
