import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";
const Text = ({
  children,
  light,
  base,
  sm,
  lg,
  xl,
  xl2,
  xl3,
  primaryDefault,
  highlight,
  base0,
  base400,
  base500,
  base600,
  base800,
  base950,
  bold,
  textCenter,
  className,
}) => {
  return (
    <p
      className={clsx(
        classes.text,
        primaryDefault && classes.primaryDefault,
        light && classes.light,
        highlight && classes.highlight,
        base0 && classes.base0,
        base400 && classes.base400,
        base500 && classes.base500,
        base600 && classes.base600,
        base800 && classes.base800,
        base950 && classes.base950,

        sm && classes.sm,
        base && classes.base,
        lg && classes.lg,
        xl && classes.xl,
        xl2 && classes.xl2,
        xl3 && classes.xl3,
        bold && classes.bold,
        textCenter && classes.textCenter,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
