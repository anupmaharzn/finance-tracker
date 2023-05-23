import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.theme}
      onClick={props.handleClick}
    >
      {" "}
      {props.children}
    </button>
  );
};

export default Button;
