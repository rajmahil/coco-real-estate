import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  GlobalButton,
  Paragraph,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";

const PageHeaderWrap = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05)
    ),
    url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f302910ffa3e99ef81f1d_Pattern%201.png"),
    url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f2f781e663afdaed5f1aa_ezgif.com-gif-maker.png");
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

const PageHeader = ({ heading, textSpan, paragraph, projectLink }) => {
  return (
    <PageHeaderWrap>
      <TextWrap>
        <SectionHeading
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {heading}
          <RedTextSpan> {textSpan}</RedTextSpan>
        </SectionHeading>
        <Paragraph>{paragraph}</Paragraph>
      </TextWrap>
    </PageHeaderWrap>
  );
};

export default PageHeader;
