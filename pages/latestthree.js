import React from "react";
import Link from "next/link"; // Import Link for navigation
import styles from "./latestthree.module.css"; // Import the updated CSS file
import Heading from "@/components/common/Heading/Heading"; // Adjust the path to where the Heading component is located

const LatestEpisodes = ({ episodes = [] }) => {
  console.log("Episodes received in the component:", episodes); // Debugging

  return (
    <div className={styles.container}>
      <div className={styles.EpisodesWrapper}>
      <Heading className={styles.heading}>Latest Episode</Heading>
        <div className={styles.episodesGrid}>
          {episodes.length > 0 ? (
            episodes.map((episode) => (
              <div key={episode.id} className={styles.episodeCard}>
                <Link href={`/episodes/${episode.slug}`}>
  <img
    src={
      episode.Thumb?.url
        ? `http://localhost:1337${episode.Thumb.url}`
        : "/default-thumbnail.jpg"
    }
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
            ))
          ) : (
            <p className={styles.noEpisodes}>
              No episodes available at the moment. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const apiUrl = "http://localhost:1337/api/episodes?fields=Title,Order,slug&populate=Thumb&sort[Order]=desc&pagination[limit]=3";

  try {
    console.log("Fetching episodes data from API...");
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error("Failed to fetch episodes:", res.status, res.statusText);
      return {
        props: {
          episodes: [],
        },
      };
    }

    const { data } = await res.json();

    console.log("Raw API Response:", data);

    const episodes = data.map((episode) => ({
      id: episode.id || null,
      Title: episode.Title || "Untitled Episode", // Access `Title` directly
      slug: episode.slug || `episode-${episode.id}`, // Use `slug` directly or fallback
      Order: episode.Order || null, // Access `Order` directly
      Thumb: episode.Thumb || null, // Use high-resolution image
    }));

    console.log("Transformed Episodes:", episodes);

    return {
      props: {
        episodes,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        episodes: [],
      },
    };
  }
}

export default LatestEpisodes;
