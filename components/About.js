import styled from "styled-components";
import AboutBgPattern from "../public/Images/AboutBgPattern.png";
import AboutBgPatternTwo from "../public/Images/AboutBgPatternTwo.png";
import SolutionImage from "../public/Images/custom-web-desing-saskatoon-coco-creative.png";
import YKTSImage from "../public/Images/Custom-Wordpress-and-Ecommerce-websites-Saskatoon.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaPalette,
  FaChartArea,
  FaDatabase,
  FaHandsHelping,
  FaBolt,
  FaSearchDollar,
} from "react-icons/fa";
import {
  ExternalLink,
  InternalLink,
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

const ContentContainer = styled.div`
  width: auto;
  display: flex;
  margin-top: 24px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const ColumnLeft = styled.div`
  width: 12%;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const ColumnRight = styled.div`
  width: 88%;
  padding-left: 10px;

  @media screen and (max-width: 550px) {
    padding-left: 0px;
    width: 100%;
  }
`;

const IconWrap = styled.div`
  font-size: 3em;
  color: #ce202f;
  padding-top: 5px;

  @media screen and (max-width: 550px) {
    font-size: 2.8em;
  }
`;

const ContentHeding = styled.h3`
  font-size: 1.4em;
  margin-top: 0px;
  margin-bottom: 5px;
`;

const About = ({ isTwo }) => {
  return (
    <AboutContainer isTwo={isTwo}>
      <AboutWrap isTwo={isTwo}>
        <AboutColOne>
          <ImageWrap isTwo={isTwo}>
            {isTwo ? (
              <Image
                src={SolutionImage}
                alt="custom web design Saskatoon Coco Creative"
              />
            ) : (
              <Image
                src={YKTSImage}
                alt="Custom Wordpress and Ecommerce websites Saskatoon"
              />
            )}
          </ImageWrap>
        </AboutColOne>
        {isTwo ? (
          <AboutColTwo>
            <TextWrap>
              <SectionHeading>
                Why Choose <RedTextSpan>Coco Creative</RedTextSpan> ?
              </SectionHeading>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaHandsHelping />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>Strong Client Relationships</ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    At Coco Creative, you are more than just another client. We
                    believe in a personalized approach to business. Our goal is
                    to build long-lasting relationships for years to come, Raj
                    and the team will ensure you are{" "}
                    <ExternalLink
                      href="https://www.google.com/search?q=coco+creative+testimonials&client=firefox-b-d&sxsrf=ALiCzsbgxBucg_MUOCmqqHqyzryXAIQ3Cg%3A1653956776702&ei=qGCVYtCtKuO5uvQPraGKgA8&ved=0ahUKEwjQoZiRvYj4AhXjnI4IHa2QAvAQ4dUDCA0&uact=5&oq=coco+creative+testimonials&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToECAAQRzoECCMQJzoFCAAQkQI6EQguEIAEELEDEIMBEMcBEKMCOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgQIABBDOgUIABCABDoLCC4QxwEQrwEQkQI6BwgAELEDEEM6BAguEEM6BwguENQCEEM6CggAELEDEIMBEEM6CAgAEIAEELEDOgsILhCABBDHARCvAToICC4QgAQQsQM6CwguEIAEELEDEIMBOgoILhCxAxCDARBDOgoILhCxAxDUAhBDOg4IABCABBCxAxCDARDJAzoFCAAQkgM6BQguEIAEOgsILhCABBCxAxDUAjoFCAAQsQM6BAgAEAo6BwgAEIAEEAo6CAgAEB4QDRAFOgYIABAeEBY6CAgAEB4QFhAKOggIABCABBDJAzoECCEQFToHCCEQChCgAUoECEEYAEoECEYYAFDFA1j8MWDWMmgJcAJ4AIABjwGIAewekgEEMC4zMpgBAKABAcgBCMABAQ&sclient=gws-wiz#lrd=0x5304f7dbffb27f7b:0xfbf01319eafa5de6,1,,,"
                      target="_blank"
                    >
                      100% satisfied with our services.
                    </ExternalLink>{" "}
                    Whether it&apos;s a minor website update or a fully-custom
                    eCommerce website, our excellent customer service is
                    consistent.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaBolt />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>Exceptional Responsiveness</ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    Coco Creative promises excellent communication and
                    authenticity, We will never leave you in the dark. Raj and
                    the team are easily accessible when needed. Our word is our
                    bond, we will ensure your needs are satisfied, and concerns
                    resolved. Our 24/7 support ensures you receive help when you
                    need it most.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaSearchDollar />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>
                    High Quality, Affordable Pricing
                  </ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    When it comes to effective modern web design, We realize not
                    every business has hundreds and thousands of dollars to
                    spend. Our affordable web design plans ensure you receive
                    the necessary services without breaking the bank. Whether
                    you are a public company or a local shop, We will work
                    together to bring your ideas to life.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
            </TextWrap>
          </AboutColTwo>
        ) : (
          <AboutColTwo>
            <TextWrap>
              <SectionHeading>
                Websites that <RedTextSpan>drive results</RedTextSpan>.
              </SectionHeading>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaPalette />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>
                    Fully-Customized & Mobile-friendly
                  </ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    Your website should be as unique as your business. Working
                    with our custom website design experts, We will develop a
                    website that represents and communicates the value of your
                    business. Whether it is a{" "}
                    <ExternalLink
                      href="https://wordpress.com/themes"
                      target="_blank"
                    >
                      {" "}
                      custom WordPress theme
                    </ExternalLink>
                    or an eCommerce website design, Coco Creative will build a
                    fully-customized, mobile-friendly website that elevates your
                    business.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaChartArea />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>Industry-Leading SEO</ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    Already have an optimized website but not getting enough
                    traffic? Our{" "}
                    <Link href="/services" passhref>
                      <InternalLink>
                        Search Engine Optimization (SEO)
                      </InternalLink>
                    </Link>
                    experts have helped many local Saskatoon businesses achieve
                    top rankings on Google. Coco Creative&apos;s SEO packages
                    are affordable and effective, helping your business shine
                    amongst the noise.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
              <ContentContainer>
                <ColumnLeft>
                  <IconWrap>
                    <FaDatabase />
                  </IconWrap>
                </ColumnLeft>
                <ColumnRight>
                  <ContentHeding>Reliable Web Hosting & Support</ContentHeding>
                  <Paragraph style={{ marginTop: "5px" }}>
                    We offer{" "}
                    <Link href="/services" passHref>
                      <InternalLink>top-notch hosting services </InternalLink>
                    </Link>
                    and support to keep your website running efficiently. From
                    domain registration to Wordpress hosting services, Coco
                    Creative is your one-stop-shop for reliable hosting services
                    in Saskatoon. Our flexible hosting and support plans offer
                    the necessary support to take your business to the next
                    level.
                  </Paragraph>
                </ColumnRight>
              </ContentContainer>
            </TextWrap>
          </AboutColTwo>
        )}
      </AboutWrap>
    </AboutContainer>
  );
};

export default About;
