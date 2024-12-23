import React, { useEffect, useState } from "react";
import clsx from "clsx";
import classes from "./PlayNow.module.css";
import { Heading, Wrapper } from "@/components/common";

const PlayNow = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      const API_URL = "http://localhost:1337/api/playingnow"; // Localhost for local development

      try {
        console.log("Fetching PlayNow data from:", API_URL);

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch video data: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched API Response:", data);

        const rawUrl = data?.data?.url || null;
        if (!rawUrl) {
          throw new Error("No video URL found in API response.");
        }

        const embedUrl = rawUrl.includes("youtu.be")
          ? rawUrl.replace("youtu.be/", "www.youtube.com/embed/")
          : rawUrl.replace("watch?v=", "embed/");

        console.log("Processed Embed URL:", embedUrl);
        setVideoUrl(embedUrl);
      } catch (err) {
        console.error("Error fetching PlayNow video data:", err);
        setError("Failed to load video.");
      }
    };

    fetchVideoData();
  }, []);

  return (
    <Wrapper className={classes.wrapper} id="playingnow">
      <div id="anchor-playing-now" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <Heading className={classes.heading}>Playing Now</Heading>
        {error ? (
          <p>{error}</p>
        ) : !videoUrl ? (
          <p>Loading video...</p>
        ) : (
          <div className={classes.videoContainer}>
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default PlayNow;
