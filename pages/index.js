import React from "react";
import Head from "next/head";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import styles from "./latestthree.module.css"; // Reuse styles from LastThreePage
import Heading from "@/components/common/Heading/Heading";
import Link from "next/link";

const HomePage = ({ latestEpisodes = [] }) => {
  return (
    <div>
      <Head>
        <title>Massive Theory - Official Website</title>
        <meta
          name="description"
          content="Animated stories about the past, present and future of humanity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <HeroSection />
        <PlayNow />
        {/* Integrate LastThreePage rendering logic */}
        <div className={styles.container}>
          <div className={styles.EpisodesWrapper}>
            <Heading className={styles.heading}>Latest Episodes</Heading>
            <div className={styles.episodesGrid}>
              {latestEpisodes.map((episode) => (
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
      </Wrapper>
    </div>
  );
};

export async function getStaticProps() {
  const API_URL = "http://10.0.1.48:1337"; // UPDATE THIS

  try {
    const response = await fetch(
      `http://10.0.1.48:1337/api/episodes?fields=Title,slug,thumb&sort[order]=desc&pagination[limit]=3`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("API Response:", JSON.stringify(data, null, 2)); // Debugging line

    const latestEpisodes = data.data || []; // Use fallback if no data is returned

    return {
      props: { latestEpisodes },
    };
  } catch (error) {
    console.error("Error fetching latest episodes:", error);
    return {
      props: { latestEpisodes: [] },
    };
  }
}


export default HomePage;
