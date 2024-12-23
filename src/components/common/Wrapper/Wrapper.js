import React from "react";
import classes from "./Wrapper.module.css";
import clsx from "clsx";

const Wrapper = ({ children, className, bg, id }) => {
  return (
    <section
      className={clsx(className, classes.wrapper)}
      style={{ background: bg }}
      id={id}
    >
      {children}
    </section>
  );
};

export default Wrapper;
