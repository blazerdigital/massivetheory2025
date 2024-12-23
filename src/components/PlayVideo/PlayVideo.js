"use client";

import React from "react";
import classes from "./PlayVideo.module.css";
import ReactPlayer from "react-player";

const PlayVideo = ({ url }) => {
  return (
    <section className={classes.videoWrapper}>
      <ReactPlayer
        className={classes.reactPlayer}
        url={url ?? ""}
        width="100%"
        height="100%"
        controls={true}
        muted={false}
      />
    </section>
  );
};

export default PlayVideo;