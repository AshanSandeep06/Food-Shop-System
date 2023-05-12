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
import DeleteIcon from "@mui/icons-material/Delete";
import ChickenPlate from "../../assets/img/chicken-01.png";
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
import CartItem from "../CartItem/CartItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type HeaderProps = {
  buttons: string[];
  links: string[];
};

const Header = (props: HeaderProps) => {
  type Anchor = "right";

  const style1 =
    "flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg";
  const style2 =
    "flex items-center gap-3 px-[15px] py-[6px] rounded-[6px] bg-blue-700 !text-white";

  const [cartState, setCartState] = React.useState({
    right: false,
  });

  const [loginState, setLoginState] = React.useState({
    right: false,
  });

  const [registerState, setRegisterState] = React.useState({
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

      setCartState({ ...cartState, [anchor]: open });
      setLoginState({ ...loginState, [anchor]: open });
      setRegisterState({ ...registerState, [anchor]: open });
    };

  const list2 = (anchor: Anchor) => (
    <Box
      sx={{
        backgroundColor: "blue",
        width: 375,
        position: "relative",
        backdropFilter: "static",
      }}
      role="presentation"
    >
      <span>
        <button
          className="cursor-pointer"
          onClick={toggleDrawer(anchor, false)}
        >
          <ArrowBackIcon />
        </button>
      </span>
    </Box>
  );

  const list1 = (anchor: Anchor) => (
    <Box
      sx={{ width: 375, position: "relative", backdropFilter: "static" }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className="flex flex-col">
        <div className="px-5 py-4 flex justify-between items-center">
          <span>
            <button
              className="cursor-pointer"
              // To Close the Canvas
              onClick={toggleDrawer(anchor, false)}
            >
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

        <div className="flex h-[calc(100vh-70px)] flex-col bg-[#F5EEE9] gap-8">
          <div className="flex flex-col pt-5 pl-5 pr-5 gap-3 h-[528px] overflow-y-scroll scrollbar-hidden scroll-smooth">
            {/* cart items */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="px-16">
            <button
              className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600
            text-gray-50 text-lg my-2 hover:shadow-lg"
            >
              Continue
            </button>
          </div>
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
      <div className="w-1/4 h-full flex items-center gap-2.5 pl-[38px]">
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

      <div className="w-3/4 h-full flex justify-between pr-12">
        <ul
          id="optionList"
          className="h-full flex items-center justify-start gap-[36px] pt-1"
        >
          {props.links.map((resource, index) => (
            <NavLink
              key={index}
              to={"/" + resource}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {resource.split("_")[1]
                ? resource[0].toUpperCase() +
                  resource.split("_")[0].substring(1) +
                  " " +
                  resource.split("_")[1][0].toUpperCase() +
                  resource.split("_")[1].substring(1)
                : resource[0].toUpperCase() + resource.substring(1)}
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
                open={cartState[anchor]}
                // TO CLOSE canvas
                // onClose={toggleDrawer(anchor, false)}
                onClose={toggleDrawer(anchor, true)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list1(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </ul>

        <div className="h-full flex items-center justify-center gap-5">
          {props.buttons.map((buttonText, index) =>
            buttonText == "login" ? (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<LoginIcon className="!text-[20px]" />}
                styles={style1}
              />
            ) : buttonText == "register" ? (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<LoginIcon className="!text-[20px]" />}
                styles={style1}
              />
            ) : buttonText == "my Profile" ? (
              <MyButton
                key={index}
                resource="my Profile"
                icon={<AccountCircleIcon className="!text-[20px]" />}
                styles={style2}
              />
            ) : (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<LoginIcon className="!text-[20px]" />}
                styles={style1}
              />
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
