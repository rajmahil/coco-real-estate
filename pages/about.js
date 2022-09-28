import React from "react";
import PageHeader from "../components/PageHeader";
import RajBio from "../components/RajBio";
import Head from "next/head";
import Process from "../components/process";

const About = () => {
  return (
    <>
      <Head>
        <title>More About Us | Coco Creative Saskatoon</title>
        <meta
          name="description"
          content="Coco Creative provides affordable web design services in Saskatoon, Saskatchewan. We have helped many companies build effective websites in various industries ranging from Trucking & transportation, general contractors, lawyers, and much more! Here is more about us. "
        />
        <meta
          property="og:title"
          content="More About Us | Coco Creative Saskatoon"
        />
        <meta
          property="og:description"
          content="Coco Creative provides affordable web design services in Saskatoon, Saskatchewan. We have helped many companies build effective websites in various industries ranging from Trucking & transportation, general contractors, lawyers, and much more! Here is more about us. .
          "
        />
        <link rel="canonical" href="https://cococreativeweb.com/services" />
        <meta property="og:type" content="website" />
      </Head>
      <PageHeader
        heading="More"
        textSpan="About Us"
        paragraph="Since 2015, We've helped many construction business owners generate exceptional results. Learn more about us below!"
      />{" "}
      <RajBio />
      <Process />
    </>
  );
};

export default About;
