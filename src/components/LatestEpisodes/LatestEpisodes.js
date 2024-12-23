import React from "react";
import Link from "next/link";
import styles from "./LatestEpisodes.module.css";

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

const LatestEpisodes = ({ episodes = [] }) => {
  console.log("Episodes in LatestEpisodes:", episodes);

  if (!episodes.length) {
    return <p>No episodes available at the moment. Please check back later!</p>;
  }

  return (
    <div className={styles.latestEpisodesWrapper}>
      <h2 className={styles.heading}>Latest Episodes</h2>
      <div className={styles.episodesGrid}>
        {episodes.map((episode) => {
          const { Title, slug, Thumb } = episode.attributes || {};
          const thumbnailUrl =
            Thumb?.formats?.thumbnail?.url || "/fallback-thumbnail.jpg";

          return (
            <Link
              href={`/episodes/${slug}`}
              className={styles.episodeCard}
              key={episode.id}
            >
              <img
                src={thumbnailUrl.startsWith("http") ? thumbnailUrl : `${API_URL}${thumbnailUrl}`}
                alt={Title || "Episode Thumbnail"}
                className={styles.thumbnail}
              />
              <h3 className={styles.episodeTitle}>
                {Title || "Title Unavailable"}
              </h3>
            </Link>
          );
        })}
      </div>
      <Link href="/episodes" className={styles.viewAllButton}>
        View All Episodes
      </Link>
    </div>
  );
};

export default LatestEpisodes;
