import React from "react";
import classes from "./Highlight.module.css";
import clsx from "clsx";

const Highlight = ({ children, className }) => {
  return <span className={clsx(classes.highlight, className)}>{children}</span>;
};

export default Highlight;
