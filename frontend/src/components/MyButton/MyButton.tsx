import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type MyButtonProps = {
  resource: string;
  icon: JSX.Element | null;
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
        {props.resource.split("_")[1]
          ? props.resource[0].toUpperCase() +
            props.resource.split("_")[0].substring(1) +
            " " +
            props.resource.split("_")[1][0].toUpperCase() +
            props.resource.split("_")[1].substring(1)
          : props.resource[0].toUpperCase() + props.resource.substring(1)}
      </button>
    </NavLink>
  );
};

export default MyButton;
