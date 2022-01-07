import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Hero from "../components/Hero";
import SponsorsBanner from "../components/SponsorsBanner";
import About from "../components/About";
import ValueProp from "../components/ValueProp";
import StatsBar from "../components/StatsBar";
import Testimonials from "../components/Testimonials";
import MainCallToAction from "../components/MainCallToAction";
import Contact from "../components/Contact";
import { useState } from "react";

export default function Home({ toggle }) {
  return (
    <>
      <Hero toggle={toggle} />
      <SponsorsBanner />
      <About />
      <About isTwo={true} />
      <ValueProp />
      <StatsBar />
      <Testimonials />
      <MainCallToAction />
    </>
  );
}
