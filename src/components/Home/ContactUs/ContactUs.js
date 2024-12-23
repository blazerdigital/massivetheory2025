"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import classes from "./ContactUs.module.css";
import { Heading, Text, VideoBg, Wrapper } from "@/components/common";
import clsx from "clsx";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwwnje");
  if (state.succeeded) {
    return <p className={classes.successMessage}> Thank you for reaching out. Your message has been sent! Although I may not always have the opportunity to respond to each one, we read all the messages. </p>;
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.inlineWrapper}>
        <div className={classes.field}>
          <label htmlFor="first-name" className={classes.label}>
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            name="firstName"
            className={classes.input}
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
            className={classes.error}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="last-name" className={classes.label}>
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            name="lastName"
            className={classes.input}
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
            className={classes.error}
          />
        </div>
      </div>

      <div className={classes.field}>
        <label htmlFor="email" className={classes.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={classes.input}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={classes.error}
        />
      </div>

      <div className={classes.field}>
        <label htmlFor="company" className={classes.label}>
          Company Name
        </label>
        <input
          id="company"
          type="text"
          name="company"
          className={classes.input}
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
          className={classes.error}
        />
      </div>

      <div className={classes.field}>
        <label htmlFor="message" className={classes.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={classes.message}
          rows="7"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={classes.error}
        />
      </div>

      <button type="submit" disabled={state.submitting} className={classes.button}>
        Submit
      </button>
    </form>
  );
}

const ContactUs = () => {
  const socialLinks = [
    { logo: "/images/youtube.png", link: "https://www.youtube.com/@massivetheory" },
    { logo: "/images/rumble.png", link: "https://rumble.com/c/MassiveTheory" },
    { logo: "/images/odysee.png", link: "https://odysee.com/@massivetheory:d" },
  ];

  return (
    <Wrapper className={classes.mainWrapper} id="contact">
      <div className={clsx("container", classes.container)}>
        <VideoBg url="/video/UFO_BG.mp4" />
        <Heading xl5 highlight className={classes.heading}>
          Contact
        </Heading>
      </div>

      <div className={clsx(classes.header, "container")}>
      <Text xl highlight className={classes.paragraphStyle}>
    If you have an idea for an episode, a business inquiry, or want to
    collaborate on a project, feel free to drop us a message!
  </Text>
        <div className={classes.socialContainer}>
          {socialLinks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="social logo" className={classes.logo} />
            </a>
          ))}
        </div>
      </div>
      <div className={clsx("container", classes.contactWrapper)}>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default ContactUs;
