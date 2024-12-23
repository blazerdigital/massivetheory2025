"use client"; // Ensure the component is treated as a client-side component

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "../Navbar/Navbar.module.css";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { navItem: "HOME", to: "/" },
    { navItem: "EPISODES", to: "/episodes" },
    { navItem: "SUPPORT", to: "/support" },
    { navItem: "CONTACT", to: "/contact" },
  ];

  const socialLinks = [
    {
      logo: "/images/youtube.png",
      link: "https://www.youtube.com/@massivetheory",
    },
    {
      logo: "/images/rumble.png",
      link: "https://rumble.com/c/MassiveTheory",
    },
    {
      logo: "/images/odysee.png",
      link: "https://odysee.com/@massivetheory:d",
    },
  ];

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined" && window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}>
      <header className={[classes.header, "container"].join(" ")}>
        <Link href="/" className={[classes.navItem, classes.logoContainer].join(" ")}>
          <img src="/images/logo.svg" alt="#" className={classes.logo} />
        </Link>
        <div className={[classes.navItems, sidebar && classes.sidebar].join(" ")}>
          {navItems.map((el, i) => (
            <Link key={i} href={el.to} className={classes.navItem} onClick={() => setSidebar(false)}>
              {el.navItem}
            </Link>
          ))}
          <div className={clsx(classes.socialContainer, classes.socialContainerMobile)}>
            {socialLinks.map((social, i) => (
              <a href={social.link} target="_blank" rel="noreferrer" key={i}>
                <img src={social.logo} alt="#" className={classes.socialLogo} />
              </a>
            ))}
          
          </div>
          <IoMdClose className={clsx(classes.icon, classes.closeIcon)} onClick={() => setSidebar(false)} />
        </div>
        <div className={classes.socialContainer}>
          {socialLinks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="#" className={classes.socialLogo} />
            </a>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          {sidebar ? (
            <IoMdClose className={classes.icon} onClick={() => setSidebar(false)} />
          ) : (
            <AiOutlineAlignRight className={classes.icon} onClick={() => setSidebar(true)} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
