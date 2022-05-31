import React from "react";
import styled from "styled-components";
import bioBackground from "../public/Images/bioBackground.png";
import rajMahilImage from "../public/Images/rajMahilImage.png";
import RajMahilSignature from "../public/Images/RajMahilSignature.png";
import {
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";

const BioContainer = styled.div`
  padding: 90px 75px;
  background-image: url(${bioBackground.src});
  background-repeat: no-repeat;
  background-position: 15% 20%;
  background-size: 390px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1680px) {
    background-position: 8% 20%;
  }
  @media screen and (max-width: 1450px) {
    background-position: 3% 20%;
  }
  @media screen and (max-width: 1250px) {
    background-position: 3% 3%;
  }
  @media screen and (max-width: 750px) {
    background: none;
    padding: 45px 26px;
  }
`;

const BioWrap = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;

const ColImage = styled.div`
  width: 55%;
  display: flex;
  margin-right: 75px;
  max-width: 650px;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    width: 100%;
    margin-right: auto;
  }
`;

const ColText = styled.div`
  width: 45%;
  @media screen and (max-width: 1250px) {
    width: 100%;
    margin-top: 45px;
  }
`;

const RajMahilImage = styled.img`
  width: 100%;
`;

const RajMahilText = styled.h3`
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 0px;
  line-height: 10px;
`;

const RajBio = () => {
  return (
    <BioContainer>
      <BioWrap>
        <ColImage>
          <RajMahilImage src={rajMahilImage.src} />
        </ColImage>
        <ColText>
          <SectionHeading>
            Passion meets <RedTextSpan>expertise</RedTextSpan>.
          </SectionHeading>{" "}
          <Paragraph>
            I started Coco Creative 5 years ago intending to level the playing
            field for local construction businesses. As the digital revolution
            continues, many small businesses struggle to keep pace. Oftentimes,
            business owners realize the importance of digital presence but are
            unable to take the necessary action. With many different digital
            marketing options, business owners are constantly bombarded. They
            often don&apos;t know who to trust, what to do, or where to start.{" "}
            <br />
            <br /> At Coco Creative,
            <ParaTextSpan>
              {" "}
              our goal is to equip local businesses with tools to help level the
              playing field against bigger businesses. We believe in an
              authentic and human approach to customer service. Our experts will
              lay out a clear plan specifically for your business to achieve
              desired results.
            </ParaTextSpan>
            <br />
            <br /> I look forward to working with your business.
          </Paragraph>
          <img src={RajMahilSignature.src} alt="Raj Mahil Signature" />
          <RajMahilText>Raj Mahil</RajMahilText>
          <Paragraph>Founder & CEO</Paragraph>
        </ColText>
      </BioWrap>
    </BioContainer>
  );
};

export default RajBio;
