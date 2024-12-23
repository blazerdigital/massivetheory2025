"use client";

import React from "react";
import Head from "next/head";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import Link from "next/link";
import styles from './EpisodesPage.module.css'; // Ensure this file exists
import { fetchAPI } from "../../lib/api";

const API_URL = process.env.STRAPI_API_URL || "http://10.0.1.48:1337";

const EpisodesPage = ({ episodes }) => {
  return (
    <div>
      <Head>
        <title>Episodes - Massive Theory</title>
        <meta
          name="description"
          content="Explore episodes of Massive Theory, featuring insightful stories about the past, present, and future of humanity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Wrapper className={styles.EpisodesWrapper}>
        <h1 className={styles.title}>Episodes</h1>
        <div className={styles.episodesGrid}>
          {episodes.map((episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              <Link href={`/episodes/${episode.slug}`}>
              <img
  src={`${API_URL}${episode.Thumb?.url || episode.Thumb?.formats?.large?.url || episode.Thumb?.formats?.medium?.url || episode.Thumb?.formats?.small?.url}`}
  alt={episode.Title}
  className={styles.thumbnail}
/>
                <h2 className={styles.episodeTitle}>{episode.Title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
export async function getStaticProps() {
  const API_URL = "http://localhost:1337";

  const response = await fetch(`${API_URL}/api/episodes?populate=Thumb&sort[Order]=desc`);
  const data = await response.json();

  console.log("API Response:", data);

  return {
    props: { episodes: data.data },
  };
}

export default EpisodesPage;
