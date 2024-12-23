import React from "react";
import { Text, Wrapper } from "../common";
import classes from "./Footer.module.css"; // Correct import path for the CSS module

const Footer = ({ specialFooter }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper className={`${classes['footer-wrapper']} ${specialFooter ? classes.specialFooter : ''}`}>
      <Text base base0 textCenter className={classes.text}>
        © {currentYear} Massive Theory All Rights Reserved
      </Text>
    </Wrapper>
  );
};

export default Footer;
