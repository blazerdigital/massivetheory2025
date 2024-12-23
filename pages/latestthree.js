import React from "react";
import Link from "next/link";
import styles from "./latestthree.module.css"; // Ensure the CSS file exists
import Heading from "@/components/common/Heading/Heading";

const LastThreePage = ({ episodes }) => {
  return (
    <div className={styles.container}>
      <div className={styles.EpisodesWrapper}>
        <Heading className={styles.heading}>Latest Episodes</Heading>
        <div className={styles.episodesGrid}>
          {episodes.map((episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              <Link href={`/episodes/${episode.slug}`}>
                <img
                  src={episode.thumb ? episode.thumb : "/images/fallback-thumbnail.jpg"}
                  alt={episode.Title || "Episode Thumbnail"}
                  className={styles.thumbnail}
                />
              </Link>
              <h3 className={styles.episodeTitle}>
                <Link href={`/episodes/${episode.slug}`}>
                  {episode.Title || "Title Unavailable"}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const API_URL = "http://localhost:1337";

  try {
    const response = await fetch(
      `${API_URL}/api/episodes?fields=Title,slug,thumb&sort[Order]=desc&pagination[limit]=3`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return {
      props: { episodes: data.data || [] },
    };
  } catch (error) {
    console.error("Error fetching latest episodes:", error);
    return {
      props: { episodes: [] },
    };
  }
}

export default LastThreePage;
