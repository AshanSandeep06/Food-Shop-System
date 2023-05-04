import React from "react";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  resource: string;
  icon: JSX.Element;
};

const Button = (props: ButtonProps) => {
  return (
    <NavLink
      id="loginContainer"
      to={"/" + props.resource}
      style={{ height: "max-content" }}
    >
      <button className=" flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg cursor-pointer">
        {props.icon}
        {props.resource[0].toUpperCase() + props.resource.substring(1)}
      </button>
    </NavLink>
  );
};

export default Button;
