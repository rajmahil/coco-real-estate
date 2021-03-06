import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import heroVidOverlay from "../public/Images/heroVidOverlay.png";
import Image from "next/image";
import HeroImage1 from "../public/Images/HeroImages/heroImage1.png";
import HeroImage2 from "../public/Images/HeroImages/heroImage2.png";
import HeroImage3 from "../public/Images/HeroImages/heroImage3.png";
import HeroImage4 from "../public/Images/HeroImages/heroImage4.png";
import HeroImage5 from "../public/Images/HeroImages/heroImage5.png";
import {
  GlobalButton,
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
  SecGlobalButton,
} from "../styles/global";

const HeroContainer = styled.div`
  width: auto;
  height: 88vh;
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;
const HeroVideoCol = styled.div`
  width: 45%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 500px;
  }
`;
const HeroColumnText = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 12px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 150px 12px 25px 12px;
  }
`;
const TextWrap = styled.div`
  width: auto;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const MainHeading = styled.h1`
  width: auto;
  line-height: 60px;
  font-size: 3em;
  font-weight: 800;
  margin: 0px;

  @media screen and (max-width: 500px) {
    font-size: 2em;
    line-height: 50px;
  }
`;

const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const HeroVidOverlay = styled.div`
  /* background-image: url(${(props) => props.image.src}); */
  z-index: 10;
  width: 100%;
  height: 88vh;
  position: absolute;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const HeroImageWrap = styled.div`
  width: auto;
  position: relative;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currImage, setCurrImage] = useState(0);
  const HeroWords = [
    "affordable",
    "attractive",
    "results-oriented",
    "mobile-responsive",
  ];

  const heroImages = [
    { imageUrl: HeroImage1, imageAlt: "custom web design saskatoon" },
    {
      imageUrl: HeroImage2,
      imageAlt: "custom wordpress websites saskatchewan",
    },
    { imageUrl: HeroImage3, imageAlt: "ecommerce website design saskatoon" },
    { imageUrl: HeroImage4, imageAlt: "digital marketing agency canada" },
    { imageUrl: HeroImage5, imageAlt: "hydrovac website design" },
  ];

  const NextWord = () => {
    currentWord === HeroWords.length - 1
      ? setCurrentWord(0)
      : setCurrentWord(currentWord + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextWord();
      currImage === heroImages.length - 1
        ? setCurrImage(0)
        : setCurrImage((currImage) => currImage + 1);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <HeroContainer>
      <HeroColumnText>
        <TextWrap>
          <MainHeading>
            Grow your business with{" "}
            <RedTextSpan>{HeroWords[currentWord]}</RedTextSpan> web design.
          </MainHeading>
          <Paragraph
            passHref
            style={{ marginBottom: "28px", maxWidth: "600px" }}
          >
            Coco Creative is a modern web design agency located in Saskatoon,
            SK. We build stunning custom websites that boost revenue by
            generating quality leads, helping you stand above the competition.{" "}
            <ParaTextSpan>Ready to grow your business?</ParaTextSpan>
          </Paragraph>
          <ButtonWrap>
            <Link href="/contact" passHref>
              <GlobalButton>Get A Quote</GlobalButton>
            </Link>
            <Link href="/projects" passHref>
              <SecGlobalButton>View Portfolio</SecGlobalButton>
            </Link>
          </ButtonWrap>
        </TextWrap>
      </HeroColumnText>
      <HeroVideoCol>
        <HeroVidOverlay image={heroVidOverlay}>
          <Image src={heroVidOverlay} layout="fill" objectFit="cover" />
        </HeroVidOverlay>
        {/* <HeroVideo loop autoPlay muted>
          <source
            src="https://res.cloudinary.com/dkmlwbskl/video/upload/v1653597789/heroVideo_ekqtwg.mp4"
            type="video/mp4"
          />
        </HeroVideo> */}
        <HeroImageWrap>
          <Image
            src={heroImages[currImage].imageUrl}
            alt={heroImages[currImage].imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </HeroImageWrap>
      </HeroVideoCol>
    </HeroContainer>
  );
};

export default Hero;
