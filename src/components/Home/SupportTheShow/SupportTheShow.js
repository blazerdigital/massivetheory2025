"use client";

import React from "react";
import classes from "./SupportTheShow.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import VideoBg from "../../common/VideoBg/VideoBg"
import clsx from "clsx";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const SupportTheShow = () => {
  const helpsList = [
      "New Episodes – Uncovering untold stories.",
      "Custom Art & Animation – Bringing ideas to life.",
      "Original Music – Enhancing the experience.",
      "Website & Security – Keeping everything running smoothly.",
      "New Technology – Exploring cutting-edge tools.",
      "Operational Growth – Expanding while staying independent.",
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
          Stay Tuned to the Signal
          </Heading>
          <Text base0 xl>
          Stay ahead with the latest episodes and exclusive updates. No fluff, no spam—just the signal.
          </Text>
        </div>
        <div className={classes.subscribeForm}>
        <SubscribeForm />
        </div>
      </div>
      <div className={clsx(classes.donationInfoContainer, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
          Support the Show
          </Heading>
          <Text base0 xl>
          Your generosity fuels our creativity. Every contribution helps us expand, innovate, and remain independent.
          </Text>
          <Text base0 xl>
          Your donation supports:
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
          If you'd like to be credited in our next episode, leave your name in the comment section when donating. Every contribution makes a difference. Thank you for being part of this journey.
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
