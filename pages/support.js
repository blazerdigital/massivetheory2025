"use client";

import React from "react";
import Head from "next/head";
import SupportTheShow from "@/components/Home/SupportTheShow/SupportTheShow";
import style from "../src/components/Home/SupportTheShow/SupportTheShow.module.css"

const SupportPage = () => {
  return (
    <div>
      <Head>
        <title>Support the Show - Massive Theory</title>
        <meta name="description" content="Support Massive Theory by contributing to our show. Your support helps us continue to provide insightful and engaging content for our viewers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <SupportTheShow />
    </div>
  );
};

export default SupportPage;
