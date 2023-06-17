import React, { useEffect, useRef } from "react";
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
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CloseIcon from "@mui/icons-material/Close";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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
  TextField,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { relative } from "path";
import MyButton from "../MyButton/MyButton";
import CartItem from "../CartItem/CartItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginForm from "../LoginForm/LoginForm";
import Form from "../Form/Form";
import { useSelector, useDispatch } from "react-redux";
import { setCartCount } from "../../globalSlice";

type HeaderProps = {
  buttons: string[];
  links: string[];
};

const Header = (props: HeaderProps) => {
  type Anchor = "right";

  const loginFormRef = useRef<HTMLDivElement>(null);
  const resetFormRef = useRef<HTMLDivElement>(null);

  const [cartState, setCartState] = React.useState({
    right: false,
  });

  const [loginState, setLoginState] = React.useState({
    right: false,
  });

  const [registerState, setRegisterState] = React.useState({
    bottom: false,
  });

  const globalCartCount = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetFormRef.current) {
      resetFormRef.current.style.display = "none";
    }

    // dispatch(setCartCount("0"));
  }, [loginState["right"], dispatch]);

  const style1 =
    "flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg";
  const style2 =
    "flex items-center gap-3 px-[15px] py-[6px] rounded-[6px] bg-blue-700 !text-white";

  const toggleDrawer1 =
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
    };

  const toggleDrawer2 =
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

      setLoginState({ ...loginState, [anchor]: open });
    };

  const toggleDrawer3 =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setRegisterState({ ...registerState, [anchor]: open });
    };

  const list2 = (anchor: Anchor) => (
    <Box
      sx={{
        width: "400px",
        position: "relative",
        backdropFilter: "static",
      }}
      role="presentation"
    >
      <LoginForm closeLoginForm={toggleDrawer2} />
    </Box>
  );

  const list3 = (anchor: Anchor) => (
    <Box
      sx={{
        backgroundColor: "red",
        width: 375,
        position: "relative",
        backdropFilter: "static",
      }}
      role="presentation"
    >
      <span>
        <button
          className="cursor-pointer"
          onClick={toggleDrawer3(anchor, false)}
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
              onClick={toggleDrawer1(anchor, false)}
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

  function clickMe() {
    console.log(globalCartCount);
  }

  return (
    // <!--Header-->
    // backdrop-blur-md  bg-[hsla(0,0%,100%,.4)]
    <header className="flex w-full h-20 !text-[rgb(81,81,81)] z-10 fixed top-0">
      <div className="w-1/4 h-full flex items-center gap-2.5 pl-[38px]">
        <img src={logo} alt="UserImage" className="w-10 h-10" />
        <NavLink to={"/home"} onClick={clickMe}>
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
                onClick={toggleDrawer1(anchor, true)}
              >
                <StyledBadge badgeContent={globalCartCount} color="error">
                  <ShoppingCartIcon className="!text-[rgb(81,81,81)]" />
                </StyledBadge>
              </IconButton>

              <SwipeableDrawer
                anchor={anchor}
                open={cartState[anchor]}
                // TO CLOSE canvas
                // onClose={toggleDrawer(anchor, false)}
                onClose={toggleDrawer1(anchor, true)}
                onOpen={toggleDrawer1(anchor, true)}
              >
                {list1(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </ul>

        <div className="h-full flex items-center justify-center gap-5">
          {props.buttons.map((buttonText, index) =>
            buttonText == "login" ? (
              (["right"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    id="btnLogin"
                    key={index}
                    className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px]"
                    variant="outlined"
                    color="primary"
                    endIcon={<LoginIcon />}
                    onClick={toggleDrawer2(anchor, true)}
                  >
                    {buttonText}
                  </Button>

                  <SwipeableDrawer
                    anchor={anchor}
                    open={loginState[anchor]}
                    onClose={toggleDrawer2(anchor, true)}
                    onOpen={toggleDrawer2(anchor, true)}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        backdropFilter: "static",
                      }}
                      role="presentation"
                    >
                      {/* Login Form */}
                      <div
                        ref={loginFormRef}
                        className="px-5 pt-3 flex flex-col justify-center"
                      >
                        <div className="mb-4 grid grid-cols-12 justify-center items-center px-2 py-1">
                          <h1 className="pl-10 col-span-10 text-center text-[25px] font-medium flex justify-center">
                            Login Form
                          </h1>

                          <span className="p-2 col-span-2">
                            <button onClick={toggleDrawer2(anchor, false)}>
                              <CloseIcon
                                id="btnClose"
                                className="cursor-pointer !w-[32px] !h-[32px]"
                              />
                            </button>
                          </span>
                        </div>

                        <div className="grid gap-4 mb-6 !font-poppins">
                          <TextField
                            className="!font-poppins"
                            label="Username"
                            type="search"
                            variant="outlined"
                            name="username"
                            placeholder="Username"
                            required
                          />

                          <TextField
                            label="Password"
                            className="!font-poppins"
                            type="search"
                            variant="outlined"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div className="flex justify-around items-center flex-wrap">
                          <div
                            id="rdbRememberMe"
                            style={{ gap: "9px" }}
                            className="col-md-5 form-check d-flex justify-content-center"
                          >
                            <input
                              className="form-check-input !w-[16px] !h-[16px] relative top-[2px] mr-[7px]"
                              type="checkbox"
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Remember Me
                            </label>
                          </div>

                          <div className="col-md-6 text-center">
                            <button
                              id="btnForgotPassword"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                position: "relative",
                                left: "10px",
                              }}
                            >
                              Forgot Password ?
                            </button>
                          </div>
                        </div>

                        <div className="my-5 flex justify-center items-center">
                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#0d6efd]"
                            variant="contained"
                          >
                            Login
                          </Button>
                        </div>

                        <div className="flex justify-center items-center flex-wrap">
                          <div
                            className="col-md-6 text-sm-end text-center"
                            style={{ paddingRight: "0px" }}
                          >
                            <label>Not a Member ?</label>
                          </div>

                          <div
                            className="col-md-6 text-sm-start text-center d-flex justify-content-center justify-content-sm-start"
                            style={{ paddingLeft: "10px" }}
                          >
                            <button
                              id="btnForgotPassword"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                position: "relative",
                                left: "10px",
                              }}
                            >
                              Register Now
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Reset Password Form */}
                      <div
                        ref={resetFormRef}
                        className="px-5 pt-3 flex flex-col justify-center"
                      >
                        <div className="mb-4 grid grid-cols-12 justify-center items-center px-2 py-1">
                          <h1 className="col-span-10 text-center text-[25px] font-medium flex justify-center">
                            Reset Password Form
                          </h1>

                          <span className="p-2 col-span-2">
                            <CloseIcon
                              id="btnClose"
                              className="cursor-pointer !w-[32px] !h-[32px]"
                            />
                          </span>
                        </div>

                        <div className="grid gap-5 mb-2 !px-[10px]">
                          <TextField
                            label="Username"
                            type="text"
                            variant="outlined"
                            name="username"
                            placeholder="Username"
                            required
                          />

                          <TextField
                            label="New Password"
                            type="text"
                            variant="outlined"
                            name="newPassword"
                            placeholder="New Password"
                            required
                          />

                          <TextField
                            label="Confirm New Password"
                            type="text"
                            variant="outlined"
                            name="confirmNewPassword"
                            placeholder="Confirm New Password"
                            required
                          />
                        </div>

                        <div className="my-5 flex justify-around items-center">
                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#0d6efd]"
                            variant="contained"
                          >
                            Reset
                          </Button>

                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px]"
                            variant="contained"
                            color="error"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </SwipeableDrawer>
                </React.Fragment>
              ))
            ) : buttonText == "register" ? (
              (["bottom"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    key={index}
                    className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px]"
                    variant="contained"
                    color="success"
                    endIcon={<PersonAddIcon />}
                    onClick={toggleDrawer3("bottom", true)}
                  >
                    {buttonText}
                  </Button>

                  <SwipeableDrawer
                    anchor={anchor}
                    open={registerState[anchor]}
                    onClose={toggleDrawer3(anchor, true)}
                    onOpen={toggleDrawer3(anchor, true)}
                  >
                    {
                      <Box
                        sx={{
                          position: "relative",
                          backdropFilter: "static",
                        }}
                        role="presentation"
                      >
                        {/* Register Form */}
                        <div className="px-5 pt-3 flex flex-col justify-center">
                          <div className="mb-5 grid grid-cols-12 justify-center items-center px-2 py-1">
                            <h1 className="col-span-11 text-center text-[22px] font-medium flex justify-center">
                              Customer Register Form
                            </h1>

                            <span className="p-2 col-span-1">
                              <button onClick={toggleDrawer3(anchor, false)}>
                                <CloseIcon
                                  id="btnClose"
                                  className="cursor-pointer !w-[32px] !h-[32px]"
                                />
                              </button>
                            </span>
                          </div>

                          <Form
                            textFieldsArray={[
                              {
                                label: "Full Name",
                                textFieldType: "text",
                                name: "fullName",
                                placeHolderText: "Full Name",
                              },
                              {
                                label: "Username",
                                textFieldType: "text",
                                name: "username",
                                placeHolderText: "Username",
                              },
                              {
                                label: "Password",
                                textFieldType: "password",
                                name: "password",
                                placeHolderText: "Password",
                              },
                              {
                                label: "Address",
                                textFieldType: "text",
                                name: "address",
                                placeHolderText: "Address",
                              },
                              {
                                label: "Contact Number",
                                textFieldType: "text",
                                name: "contact",
                                placeHolderText: "Contact Number",
                              },
                              {
                                label: "Email",
                                textFieldType: "text",
                                name: "email",
                                placeHolderText: "Email",
                              },
                            ]}
                            buttonsArray={[
                              {
                                color: "success",
                                icon: <PersonAddIcon />,
                                text: "Register",
                              },
                              {
                                color: "error",
                                icon: <BackspaceIcon />,
                                text: "Cancel",
                              },
                            ]}
                          />
                        </div>
                      </Box>
                    }
                  </SwipeableDrawer>
                </React.Fragment>
              ))
            ) : buttonText == "my_profile" ? (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<AccountCircleIcon className="!text-[20px]" />}
                styles={style2}
              />
            ) : (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<LogoutIcon className="!text-[20px]" />}
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
