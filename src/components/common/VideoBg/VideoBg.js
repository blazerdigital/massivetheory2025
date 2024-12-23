import React from "react";
import classes from "./VideoBg.module.css";

const VideoBg = ({ url }) => {
  return (
    <div className={classes.videoContainer}>
      <video className={classes.video} autoPlay loop muted playsInline>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBg;
