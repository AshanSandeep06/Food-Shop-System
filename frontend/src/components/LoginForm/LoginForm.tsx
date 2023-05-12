import { Button, TextField } from "@mui/material";
import React, { MouseEventHandler, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <aside className="p-4">
      <div className="grid grid-cols-12 border-2 border-red-600 justify-center items-center p-2">
        <h1 className="pl-10 col-span-10 text-center text-[25px] font-medium flex justify-center">Login Form</h1>
        <span className="p-2 col-span-2">
          <CloseIcon
            id="btnClose"
            className="cursor-pointer !w-[32px] !h-[32px]"
          />
        </span>
      </div>

      <div>
        <div>
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            name="username"
            placeholder="Username"
            required
          />
        </div>

        <div>
          <TextField
            label="Password"
            type="text"
            variant="outlined"
            name="password"
            placeholder="Password"
            required
          />
        </div>
      </div>

      <div>
        <div
          id="rdbRememberMe"
          style={{ gap: "9px" }}
          className="col-md-5 form-check d-flex justify-content-center"
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
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

      <div>
        <Button
          className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#0d6efd]"
          variant="contained"
        >
          Login
        </Button>
      </div>

      <div>
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
            id="btnRegisterNow"
            className="btn btn-success"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#registerForm"
            aria-controls="staticBackdrop"
          >
            Register Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default LoginForm;
