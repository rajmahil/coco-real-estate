import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import cocoCreativeLogo from "../public/Images/CocoCreativeLogo.png";
import { useState, useEffect } from "react";

const FooterContainer = styled.footer`
  width: auto;
  background: #000;
  padding: 75px 75px 40px 75px;

  @media screen and (max-width: 975px) {
    padding: 45px 22px;
  }
`;
const FooterWrap = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-bottom: 45px;
  border-bottom: 1px #fff solid;
  margin-bottom: 25px;

  @media screen and (max-width: 975px) {
    flex-direction: column;
  }
`;
const FooterColLogo = styled.div`
  width: 35%;

  @media screen and (max-width: 975px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const FooterColLinks = styled.div`
  width: 65%;
  display: flex;

  @media screen and (max-width: 975px) {
    width: 100%;
    flex-direction: column;
  }
`;
const FooterCols = styled.div`
  width: 33.1%;
  color: #fff;
  padding-left: 12px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 975px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 24px 0px;
    padding: 0px;
  }
`;
const FooterHeading = styled.h3`
  font-size: 1.4em;
  color: #fff;
  font-weight: 700;
  margin-top: 0px;
`;
const ImageWrap = styled.div`
  width: 225px;
`;
const CopyrightWrap = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CopyrightText = styled.text`
  font-size: 1em;
  color: #fff;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const FooterLinks = styled.text`
  color: #fff;
  opacity: 0.5;
  padding: 20px 0px;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;
const FooterDescription = styled.p`
  width: auto;
  color: #fff;
  opacity: 0.5;
  max-width: 350px;
  line-height: 25px;
`;

const Footer = () => {
  const [curDate, setCurDate] = useState();

  useEffect(() => {
    var currentTime = new Date();
    setCurDate(currentTime.getFullYear());
  }, []);
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterColLogo>
          <ImageWrap>
            <Image src={cocoCreativeLogo} />
          </ImageWrap>
          <FooterDescription>
            We build websites for construction businesses that generate results.
          </FooterDescription>
        </FooterColLogo>
        <FooterColLinks>
          <FooterCols>
            <FooterHeading>Quick Links</FooterHeading>
            <Link href="/" passHref>
              <FooterLinks>Home</FooterLinks>
            </Link>
            <Link href="/contact" passHref>
              <FooterLinks>Book a Strategy Call</FooterLinks>
            </Link>
            <FooterLinks>Privacy Policy</FooterLinks>
          </FooterCols>
          <FooterCols>
            <FooterHeading>Follow Us</FooterHeading>
            <FooterLinks>Facebook</FooterLinks>
            <FooterLinks>Instagram</FooterLinks>
          </FooterCols>
          <FooterCols>
            <FooterHeading>Contact Us</FooterHeading>
            <Link href="mailto:info@cococreativeweb.com" passHref>
              <FooterLinks>Em: info@cococreativeweb.com</FooterLinks>
            </Link>
            <Link href="tel:306-716-3130" passHref>
              <FooterLinks>Ph: 306-716-3130</FooterLinks>
            </Link>
          </FooterCols>
        </FooterColLinks>
      </FooterWrap>
      <CopyrightWrap>
        <CopyrightText>
          Copyright © {curDate} Coco Creative. All Rights Reserved.
        </CopyrightText>
      </CopyrightWrap>
    </FooterContainer>
  );
};

export default Footer;
