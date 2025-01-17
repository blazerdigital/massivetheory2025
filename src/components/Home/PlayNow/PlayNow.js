"use client";

import React from "react";
import clsx from "clsx";
import classes from "./PlayNow.module.css";
import { Heading, Wrapper } from "@/components/common";

const PlayNow = () => {
  const hardcodedVideoUrl = "https://www.youtube.com/embed/P2nLozN3dhc"; // Replace with your video URL

  return (
    <Wrapper className={classes.wrapper} id="playingnow">
      <div id="anchor-playing-now" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <Heading className={classes.heading}>Playing Now</Heading>
        <div className={classes.videoContainer}>
          <iframe
            src={hardcodedVideoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

export default PlayNow;
