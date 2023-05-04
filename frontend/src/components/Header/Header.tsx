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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { relative } from "path";
import MyButton from "../MyButton/MyButton";

type HeaderProps = {
  buttons: JSX.Element[];
  links: string[];
};

const Header = (props: HeaderProps) => {
  type Anchor = "right";

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 350, position: "relative", backdropFilter: "static" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className="flex flex-col">
        <div className="px-5 py-4 border-4 border-black flex justify-between">
          <span>
            <button className="cursor-pointer">
              <ArrowBackIcon />
            </button>
          </span>

          <span>
            Cart <ShoppingCartIcon className="text-[#ed1e2f] ml-[1px]" />
          </span>

          <span>
            <MyButton
              resource={"clear"}
              icon={null}
              styles={
                "flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg"
              }
            />
          </span>
        </div>

        <div>
          <div>
            {/* cart items */}
            <div></div>
            {/* cart items */}
            <div></div>
          </div>

          <div></div>
        </div>
      </section>
    </Box>
  );

  // const activeLink = "border-b-[5px] rounded-[26%] w-[43%] border-[#7461e2]";
  // const activeLink = "border-b-[5px] border-[43%] border-[#7461e2]";
  const activeLink = "text-[#f97316]";
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
    // backdrop-blur-md  bg-[hsla(0,0%,100%,.4)]
    <header className="flex w-full h-20 !text-[rgb(81,81,81)] z-10 fixed top-0">
      <div className="w-1/3 h-full flex items-center gap-2.5 pl-[38px]">
        <img src={logo} alt="UserImage" className="w-10 h-10" />
        <NavLink to={"/home"}>
          <h1
            style={{ letterSpacing: "2px" }}
            className="h-max mb-[1px] !text-2xl !text-black"
          >
            Tyler's Cafe
          </h1>
        </NavLink>
      </div>

      <div className="w-2/3 h-full flex justify-between pr-12">
        <ul
          id="optionList"
          className="h-full flex items-center justify-start gap-[60px] pt-1"
        >
          {props.links.map((resource, index) => (
            <NavLink
              key={index}
              to={"/" + resource}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {resource[0].toUpperCase() + resource.substring(1)}
            </NavLink>
          ))}

          {/* =========== Off Canvas =========== */}
          {(["right"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                aria-label="cart"
                className="!pb-[13px]"
                onClick={toggleDrawer(anchor, true)}
              >
                <StyledBadge badgeContent={"0"} color="error">
                  <ShoppingCartIcon className="!text-[rgb(81,81,81)]" />
                </StyledBadge>
              </IconButton>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </ul>

        <div className="h-full flex items-center justify-center gap-5">
          {props.buttons.map((button, index) => button)}
        </div>
      </div>
    </header>
  );
};

export default Header;
