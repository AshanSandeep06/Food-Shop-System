import { TextField } from "@mui/material";
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

      <div></div>
    </aside>
  );
};

export default LoginForm;
