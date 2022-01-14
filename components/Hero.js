import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import HeroImage from "../public/Images/HeroImage.jpg";
import {
  GlobalButton,
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
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
const HeroColumnImage = styled.div`
  width: 50%;
  height: 100%;
  background: url(${HeroImage.src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 500px;
  }
`;
const HeroColumnText = styled.div`
  width: 50%;
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
  max-width: 600px;
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
    font-size: 2.2em;
    line-height: 50px;
  }
`;

const Hero = () => {
  const heroWords = ["agents", "teams", "brokers"];
  const [heroWord, setHeroWord] = useState(0);

  const switchSlide = () => {
    if (heroWord === 2) {
      setHeroWord(0);
    } else {
      setHeroWord(heroWord + 1);
    }
  };

  setTimeout(switchSlide, 3000);

  return (
    <HeroContainer>
      <HeroColumnText>
        <TextWrap>
          <MainHeading>
            We help real estate
            <br /> <RedTextSpan>{heroWords[heroWord]}</RedTextSpan> prosper
            online.
          </MainHeading>
          <Paragraph passHref style={{ marginBottom: "28px" }}>
            Stand above the competition and cut through the noise with stunning
            real estate webdesign and best-in-class digital marketing. Schedule
            your <ParaTextSpan>free no-obligation strategy call</ParaTextSpan>{" "}
            to get started.
          </Paragraph>
          <Link href="/contact" passHref>
            <GlobalButton>Book a Strategy Call</GlobalButton>
          </Link>
        </TextWrap>
      </HeroColumnText>
      <HeroColumnImage />
    </HeroContainer>
  );
};

export default Hero;
