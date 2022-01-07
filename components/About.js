import styled from "styled-components";
import AboutBgPattern from "../public/Images/AboutBgPattern.png";
import AboutBgPatternTwo from "../public/Images/AboutBgPatternTwo.png";
import SolutionImage from "../public/Images/SolutionImage.png";
import YKTSImage from "../public/Images/YKTSImage.png";
import Image from "next/image";
import {
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";

const AboutContainer = styled.div`
  width: auto;
  padding: 90px 75px;
  background: ${({ isTwo }) =>
    isTwo ? `url(${AboutBgPatternTwo.src})` : `url(${AboutBgPattern.src})`};
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: ${({ isTwo }) => (isTwo ? "85% 6%" : "12% 10%")};

  @media screen and (max-width: 1150px) {
    background-position: ${({ isTwo }) => (isTwo ? "85% 6%" : "8% 6%")};
  }

  @media screen and (max-width: 675px) {
    background-size: 400px;
  }

  @media screen and (max-width: 575px) {
    padding: 45px 22px;
  }

  @media screen and (max-width: 500px) {
    background-position: ${({ isTwo }) => (isTwo ? "100% 0%" : "0% 0%")};
    background-size: 300px;
  }
`;
const AboutWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: ${({ isTwo }) => (isTwo ? "row-reverse" : "row")};

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;
const AboutColOne = styled.div`
  width: 55%;

  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;
const AboutColTwo = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  max-width: 600px;

  @media screen and (max-width: 1150px) {
    margin-top: 20px;
  }
`;
const ImageWrap = styled.div`
  width: auto;
  padding-right: ${({ isTwo }) => !isTwo && "45px"};
  padding-left: ${({ isTwo }) => isTwo && "45px"};

  @media screen and (max-width: 1150px) {
    padding: 0px;
  }
`;

const About = ({ isTwo }) => {
  return (
    <AboutContainer isTwo={isTwo}>
      <AboutWrap isTwo={isTwo}>
        <AboutColOne>
          <ImageWrap isTwo={isTwo}>
            {isTwo ? <Image src={SolutionImage} /> : <Image src={YKTSImage} />}
          </ImageWrap>
        </AboutColOne>
        <AboutColTwo>
          <TextWrap>
            <SectionHeading>
              You know this <RedTextSpan>story</RedTextSpan> -
            </SectionHeading>
            <Paragraph>
              You have an amazing vision for your construction business. The
              only item missing is an attractive website. You search endlessly
              for solutions and there are two obvious options that stand out.
              First, you can attempt to develop your own website using
              time-consuming and ineffective DIY website builders.
              <ParaTextSpan>
                Second, you can hire a generic web designer with zero industry
                knowledge to build you a website.
              </ParaTextSpan>{" "}
              <br />
              <br />
              The designer uses a one-size-fits-all website template that
              butchers your company image and fails to generate any significant
              results. Both options lead to the same result.
              <br />
              <br /> An unattractive website that leaves a poor impression and
              fails to bring you new clients.
              <ParaTextSpan>
                {" "}
                So why pay for something that doesn’t work?
              </ParaTextSpan>
            </Paragraph>
          </TextWrap>
        </AboutColTwo>
      </AboutWrap>
    </AboutContainer>
  );
};

export default About;
