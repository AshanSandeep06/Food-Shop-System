import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type MyButtonProps = {
  resource: string;
  icon: JSX.Element;
  styles: string;
};

const MyButton = (props: MyButtonProps) => {
  return (
    <NavLink
      id="loginContainer"
      to={"/" + props.resource}
      style={{ height: "max-content", borderRadius: "6px" }}
    >
      <button className={props.styles}>
        {props.icon}
        {props.resource[0].toUpperCase() + props.resource.substring(1)}
      </button>
    </NavLink>
  );
};

export default MyButton;
