"use client";

import React from "react";
import classes from "./SupportTheShow.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import VideoBg from "../../common/VideoBg/VideoBg"
import clsx from "clsx";
import MailerLiteForm from "../MailerLiteForm/MailerLiteForm";

const SupportTheShow = () => {
  const helpsList = [
    "Creating New Content",
    "Custom Art",
    "Animation and VFX",
    "Original Music and Licenses",
    "Website Security",
    "Exploring New Technology",
    "Making Us Platform Independent",
    "Covering Operational Expenses",
    "Expanding Our Operations",
  ];

  return (
    <Wrapper className={classes.mainWrapper} id="support">
      <div className={clsx("container", classes.container)}>
      <VideoBg url="/video/Mountain_BG.mp4" />
        <Heading xl5 highlight className={classes.heading}>
          Support the Show
        </Heading>
      </div>
      <div className={clsx(classes.subscriberContainer, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Subscribe to Our Newsletter
          </Heading>
          <Text base0 xl>
            In addition to follow up on Youtube, Rumble and Odysee, to show your support for us as content creators and help spread our message, subscribing to our newsletter is the best action you can take right now.
          </Text>
          <Text base0 xl>
            By subscribing, you'll be helping us achieve our goal of becoming platform-independent, allowing us to stay connected as the digital landscape continues to evolve.
          </Text>
          <Text base0 xl>
            Rest assured that your information will never be shared with third-parties, so you'll only receive updates when a new episode drops. Join our audience today and be a part of our journey!
          </Text>
        </div>
        <div className={classes.subscribeForm}>
          <MailerLiteForm />
        </div>
      </div>
      <div className={clsx(classes.donationInfoContainer, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Make A Donation
          </Heading>
          <Text base0 xl>
          Donating is quick, secure, and effortless. Using the Donorbox app, your donation is processed securely, ensuring your transaction is safe and protected. 
          </Text>
          <Text base0 xl>
          We greatly appreciate your generosity. Your support enables us to produce more content, expand our show, and enhance our impact. Your donation will be used for:
          </Text>
          <ul className={classes.helpsLists}>
            {helpsList.map((list, i) => (
              <li className={classes.list} key={i}>
                <Text base0 xl>
                  {list}
                </Text>
              </li>
            ))}
          </ul>
          <Text base0 xl>
          If you would like to be included in the credits of our next episode, please leave your name in the comment section when you make your donation. Your donation truly makes a difference.
          </Text>
        </div>
        <div className={classes.donationBox}>
          <iframe
            src="https://donorbox.org/embed/support-massive-theory?default_interval=o"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameBorder="0"
            scrolling="no"
            height="900px"
            width="100%"
            style={{ maxWidth: "500px", minWidth: "250px", maxHeight: "none !important" }}
            allow="payment"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

export default SupportTheShow;
