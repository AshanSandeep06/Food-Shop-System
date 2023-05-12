import { Button, TextField } from "@mui/material";
import React from "react";

const LoginForm = () => {
  return (
    <aside>
      <div>
        <h1>Login Form</h1>
        <span>Icon</span>
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

      <div></div>
    </aside>
  );
};

export default LoginForm;
