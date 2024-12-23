import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({
  children,

  onClick,
  href,
  transparentBase0,
  transparentBase950,
  base0,
  noShadow,
  primaryDefault,
  wFull,
  className,
  to,
}) => {
  return (
    <>
      {onClick ? (
        <button
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            base0 && classes.base0,
            noShadow && classes.noShadow,
            primaryDefault && classes.primaryDefault,
            wFull && classes.wFull
          )}
          onClick={onClick}
        >
          {children}
        </button>
      ) : href ? (
        <a
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            primaryDefault && classes.primaryDefault,
            wFull && classes.wFull
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      ) : to ? (
        <Link
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            primaryDefault && classes.primaryDefault,
            wFull && classes.wFull
          )}
          to={to}
        >
          {children}
        </Link>
      ) : (
        <button
          className={clsx(
            className,
            classes.button,
            transparentBase0 && classes.transparentBase0,
            transparentBase950 && classes.transparentBase950,
            noShadow && classes.noShadow,
            base0 && classes.base0,
            primaryDefault && classes.primaryDefault,
            wFull && classes.wFull
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
