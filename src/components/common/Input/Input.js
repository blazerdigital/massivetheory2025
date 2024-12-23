import React from "react";
import classes from "./Input.module.css";
import clsx from "clsx";

const Input = ({ className, type, placeholder, value, setValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={clsx(classes.input, className)}
    />
  );
};

export default Input;
