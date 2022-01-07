import Link from "next/link";
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
  line-height: 50px;
  font-size: 2.6em;
  font-weight: 800;
  margin: 0px;

  @media screen and (max-width: 500px) {
    font-size: 2.2em;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroColumnText>
        <TextWrap>
          <MainHeading>
            Real Esatate Web-design, make more{" "}
            <RedTextSpan>money brother</RedTextSpan>.
          </MainHeading>
          <Paragraph passHref style={{ marginBottom: "28px" }}>
            We build stunning websites that boost revenue and generate qualified
            leads for <ParaTextSpan>construction businesses. </ParaTextSpan>
            Schedule your free{" "}
            <ParaTextSpan> no-obligation strategy</ParaTextSpan> call to get
            started.
          </Paragraph>
          <Link href="/contact" passHref>
            <GlobalButton>Contact Us</GlobalButton>
          </Link>
        </TextWrap>
      </HeroColumnText>
      <HeroColumnImage />
    </HeroContainer>
  );
};

export default Hero;
