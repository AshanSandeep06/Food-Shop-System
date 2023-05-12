import { Button, TextField } from "@mui/material";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./LoginForm.css";
import { ArrowFunction } from "typescript";

type Anchor = "right";

type LoginFormProps = {
  closeLoginForm: (anchor: Anchor, open: boolean) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const loginFormRef = useRef<HTMLDivElement>(null);
  const resetFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (resetFormRef.current) {
      resetFormRef.current.style.display = "none";
    }
  }, []);

  const handleCloseLoginForm = (anchor: Anchor) => {
    if (props.closeLoginForm) {
      alert("Triggered");
      console.log(props.closeLoginForm);
      props.closeLoginForm(anchor, false);
    }
  };

  return (
    <>
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
            <CloseIcon
              id="btnClose"
              className="cursor-pointer !w-[32px] !h-[32px]"
              onClick={() => handleCloseLoginForm("right")}
            />
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
              checked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
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
    </>
  );
};

export default LoginForm;
