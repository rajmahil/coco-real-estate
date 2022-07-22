import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import PageHeaderOne from "../public/Images/pageHeaderOne.png";
import {
  GlobalButton,
  Paragraph,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";

const PageHeaderWrap = styled.div`
  position: relative;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05)
  );
  background-position: 0px 0px, 0px 0px, 0px 0px;
  background-size: auto, 344px, auto;
  background-repeat: repeat, repeat, repeat;
  height: 450px;
  padding-top: 90px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextWrap = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageHeading = styled.h1`
  font-size: 3.2em;
  font-weight: 800;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const PageSubheading = styled.div`
  font-size: 1.22em;
`;

const ImageBackWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
  top: 0;
  left: 0;
  z-index: -1;
`;

// url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f302910ffa3e99ef81f1d_Pattern%201.png"),
// url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f2f781e663afdaed5f1aa_ezgif.com-gif-maker.png");

const PageHeader = ({ heading, textSpan, paragraph, projectLink }) => {
  return (
    <PageHeaderWrap>
      <ImageBackWrap>
        <Image src={PageHeaderOne} layout="fill" objectFit="cover" />
      </ImageBackWrap>

      <TextWrap>
        <PageHeading>
          {heading}
          <RedTextSpan> {textSpan}</RedTextSpan>
        </PageHeading>
        <PageSubheading>{paragraph}</PageSubheading>
      </TextWrap>
    </PageHeaderWrap>
  );
};

export default PageHeader;
