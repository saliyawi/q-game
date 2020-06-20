import React from "react";
import classes from "./FormInput.module.css";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={classes.formRow}>
      {label && <label>{label}</label>}

      <input
        className={classes.formInput}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
