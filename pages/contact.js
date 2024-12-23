"use client";

import React from "react";
import Head from "next/head";
import classes from "../src/components/Home/ContactUs/ContactUs.module.css"; // Ensure this file exists
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import EcwidStore from "@/components/Store/store";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - Massive Theory</title>
        <meta name="description" content="Get in touch with us through our contact page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <ContactUs />
    </div>
  );
};

export default ContactPage;
