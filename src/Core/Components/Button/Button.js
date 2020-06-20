import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={classes.btn} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
