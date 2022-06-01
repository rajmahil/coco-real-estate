import React from "react";
import PageHeader from "../components/PageHeader";
import RajBio from "../components/RajBio";
import styled from "styled-components";
import Image from "next/image";
import { SectionHeading, Paragraph, RedTextSpan } from "../styles/global";
import ValuePropImage from "../public/Images/ValuePropImage.png";
import { BiLandscape, BiVolumeFull, BiWrench } from "react-icons/bi";
import StatsBarImage from "../public/Images/StatsBarImage.png";
import Testimonials from "../components/Testimonials.js";
import Head from "next/head";

const SectionWrap = styled.div`
  padding: 90px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      180deg,
      rgba(206, 32, 47, 0.74),
      rgba(206, 32, 47, 0.74)
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${StatsBarImage.src});
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;

  @media screen and (max-width: 650px) {
    padding: 45px 22px;
  }
`;
const SectionContainer = styled.div`
  max-width: 1240px;
  width: 100%;
`;

const ColContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1075px) {
    flex-direction: column;
  }
`;
const Col65 = styled.div`
  width: 65%;
  padding-right: 45px;

  @media screen and (max-width: 1075px) {
    width: 100%;
  }
`;
const Col35 = styled.div`
  width: 35%;

  @media screen and (max-width: 1075px) {
    width: 100%;
    max-width: 600px;
  }
`;
const IconWrap = styled.div`
  color: #fff;
  font-size: 4em;
  line-height: 10px;
`;
const SectionThreeHeading = styled.h3`
  color: #fff;
  margin-top: 10px;
  margin-bottom: 3px;
  font-size: 1.6em;
  line-height: 35px;
`;

const CardsWrap = styled.div`
  padding: 25px 0px;
  border-bottom: dashed 1px #fff;
`;

const About = () => {
  return (
    <>
      <PageHeader
        heading="More"
        textSpan="About Us"
        paragraph="Since 2015, We've helped many construction business owners generate exceptional results. Learn more about us below!"
      />{" "}
      <RajBio />
      {/*<SectionWrap>
         <SectionContainer>
          <SectionHeading
            style={{
              textAlign: "left",
              color: "#fff",
              maxWidth: "628px",
              marginBottom: "26px",
            }}
          >
            We provide purpose-driven web design, small business marketing &
            Search Engine Optimization services.
          </SectionHeading>
           <ColContainer>
            <Col65>
              <Image
                src={ValuePropImage}
                alt="custom website design in Saskatoon, Saskatchewan - Coco Creative"
              />
            </Col65>
            <Col35>
              <CardsWrap>
                <IconWrap>
                  <BiLandscape />
                </IconWrap>
                <SectionThreeHeading>
                  Web Design & Development
                </SectionThreeHeading>
                <Paragraph style={{ color: "#fff" }}>
                  Your website is the primary tool to convert curious visitors
                  into potential clients. We&apos;ll build a modern
                  mobile-friendly website, professionally designed and developed
                  by our experts.
                </Paragraph>
              </CardsWrap>
              <CardsWrap>
                <IconWrap>
                  <BiVolumeFull />
                </IconWrap>
                <SectionThreeHeading>
                  Small Business Marketing
                </SectionThreeHeading>
                <Paragraph style={{ color: "#fff" }}>
                  We’ll analyze your current digital presence and provide proven
                  digital marketing strategies to help your small business grow,
                  while using your budget with maximum efficiency.
                </Paragraph>
              </CardsWrap>
              <CardsWrap style={{ borderBottom: "none" }}>
                <IconWrap>
                  <BiWrench />
                </IconWrap>
                <SectionThreeHeading>
                  Search Engine Optimization
                </SectionThreeHeading>
                <Paragraph style={{ color: "#fff" }}>
                  For potential customers to find your website, strong SEO
                  (Search Engine Optimization) is necessary to earn top
                  positions. Our SEO services will help attract targeted and
                  qualified prospects to your website.
                </Paragraph>
              </CardsWrap>
            </Col35>
          </ColContainer> 
        </SectionContainer>
      </SectionWrap>*/}
    </>
  );
};

export default About;
