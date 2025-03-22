import React from "react";
import classes from "./LatestEpisodes.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import Link from "next/link";

const LatestEpisodes = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return <p>No episodes available at the moment. Please check back later!</p>;
  }

  return (
    <Wrapper className={classes.wrapper} id="latestepisodes">
      <div id="anchor-episodes" className="anchor"></div>
      <div className={clsx("container", classes.container)}>
        <Heading xl5 highlight className={classes.heading}>
        </Heading>

        <div className={classes.episodes}>
          {episodes.map((episode) => {
            const { Title, slug, Thumb } = episode;
            const thumbnailUrl = Thumb?.formats?.thumbnail?.url
              ? `${process.env.STRAPI_API_URL || "http://localhost:1337"}${Thumb.formats.thumbnail.url}`
              : "/fallback-thumbnail.jpg";

            return (
              <Link href={`/episodes/${slug}`} className={classes.episode} key={episode.id}>
                <img
                  src={thumbnailUrl}
                  alt={Title || "Episode Thumbnail"}
                  className={classes.img}
                />
                <Text highlight xl textCenter className={classes.text}>
                  {Title || "Title Unavailable"}
                </Text>
              </Link>
            );
          })}
        </div>
        <Link href="/episodes" className={classes.button}>
          View All Episodes
        </Link>
      </div>
    </Wrapper>
  );
};

export default LatestEpisodes;
