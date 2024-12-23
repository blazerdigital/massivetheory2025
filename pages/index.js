import React from "react";
import Head from "next/head";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import HeroSection from "../src/components/Home/HeroSection/HeroSection";
import PlayNow from "../src/components/Home/PlayNow/PlayNow";
import LatestEpisodes from "./latestthree"; // Import your component

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337"; // Ensure API_URL is defined
const HomePage = ({ latestEpisodes = [] }) => {
  console.log("Latest Episodes Data:", JSON.stringify(latestEpisodes, null, 2));

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
        <LatestEpisodes episodes={latestEpisodes} /> {/* Use the LatestEpisodes component */}
      </Wrapper>
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

  try {
    const response = await fetch(`${API_URL}/api/episodes?populate=Thumb&sort[Order]=desc`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const latestEpisodes = data?.data.slice(0, 3) || []; // Fetch only the first 3 episodes
    console.log("Fetched Episodes for Homepage:", JSON.stringify(latestEpisodes, null, 2));

    return {
      props: {
        latestEpisodes,
      },
    };
  } catch (error) {
    console.error("Error fetching episodes for Homepage:", error);

    return {
      props: {
        latestEpisodes: [], // Fallback to an empty array
      },
    };
  }
}
