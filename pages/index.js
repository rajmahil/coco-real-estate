import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Hero from "../components/Hero";
import SponsorsBanner from "../components/SponsorsBanner";
import About from "../components/About";
import Services from "../components/Services";
import StatsBar from "../components/StatsBar";
import Testimonials from "../components/Testimonials";
import MainCallToAction from "../components/MainCallToAction";
import Contact from "../components/Contact";
import { useState } from "react";
import FeaturedProject from "../components/FeaturedProject";
import Faq from "../components/Faq";
import Head from "next/head";

export default function Home({ toggle, projects }) {
  return (
    <>
      <Head>
        <title>
          Coco Creative: Custom Web Design + Development in Saskatoon
        </title>
        <meta
          name="description"
          content="Coco Creative is a full-service web design agency in Saskatoon, Saskatchewan. From custom WordPress websites, and eCommerce stores to best-in-call Search Engine Optimization (SEO) services, Coco Creative is here to help! We will build a modern website that takes your business to the next level.
          "
        />
        <meta
          property="og:title"
          content="Coco Creative: Custom Web Design + Development in Saskatoon"
        />
        <meta
          property="og:description"
          content="Coco Creative is a full-service web design agency in Saskatoon, Saskatchewan. From custom WordPress websites, and eCommerce stores to best-in-call Search Engine Optimization (SEO) services, Coco Creative is here to help! We will build a modern website that takes your business to the next level.
          "
        />
        <link rel="canonical" href="https://cococreativeweb.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero toggle={toggle} />
      <SponsorsBanner />
      <Services />
      <About />
      <About isTwo={true} />
      <StatsBar />
      <Testimonials />
      <FeaturedProject projects={projects} />
      <Faq />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://floating-hollows-19339.herokuapp.com/projects`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}
