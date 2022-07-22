import styled from "styled-components";
import Link from "next/link";
import {
  Paragraph,
  RedTextSpan,
  SectionHeading,
  ExternalLink,
  InternalLink,
} from "../styles/global";
import Image from "next/image";
import ServicesImage from "../public/Images/web-design-and-SEO-company-Saskatoon.png";
import ValueBgOne from "../public/Images/ValueBgOne.png";
import ValueBgTwo from "../public/Images/ValueBgTwo.png";

const ValueContainer = styled.div`
  position: relative;
  background: #ce202f;
  /* background-image: url(${ValueBgTwo.src});
  background-position: 9% 94%;
  background-size: 350px; */
  background-repeat: no-repeat, no-repeat;
  width: auto;
  padding: 90px 75px;

  @media screen and (max-width: 1000px) {
    background-image: none;
  }

  @media screen and (max-width: 575px) {
    padding: 45px 22px;
  }
`;
const ValueWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;
const HeadingWrap = styled.div`
  max-width: 600px;
  padding-bottom: 22px;
`;
const ColImage = styled.div`
  width: 60%;

  padding-right: 45px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0px;
    margin-bottom: 24px;
  }
`;
const ColText = styled.div`
  width: 40%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  width: auto;
`;
const TextGrid = styled.div`
  padding: 15px;
  border-bottom: 1px #000 dashed;
  margin-bottom: 15px;
  color: #fff;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;
const ValueContentWrap = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ValueTextNum = styled.text`
  color: #fff;
  font-size: 4em;
  line-height: 50px;
  font-weight: 900;
`;
const ValueHeading = styled.h3`
  font-size: 1.8em;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const BackImageWrap = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 9%;
  right: 75%;
  width: 350px;

  @media screen and (max-width: 1450px) {
    bottom: 20%;
  }

  @media screen and (max-width: 1290px) {
    bottom: 30%;
  }

  @media screen and (max-width: 1200px) {
    bottom: 40%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Services = () => {
  return (
    <ValueContainer>
      <BackImageWrap>
        <Image src={ValueBgTwo} />
      </BackImageWrap>
      <ValueWrap>
        <HeadingWrap>
          <SectionHeading style={{ color: "#fff" }}>
            Modern Websites and best-in-class digital marketing to grow your
            business online.
          </SectionHeading>
        </HeadingWrap>
        <ValueContentWrap>
          <ColImage>
            <Image
              src={ServicesImage}
              alt="web design and SEO company Saskatoon"
            />
          </ColImage>
          <ColText>
            <TextWrap>
              <TextGrid>
                <ValueTextNum>01</ValueTextNum>
                <ValueHeading>Web Design + Development</ValueHeading>
                <Paragraph style={{ color: "#fff", marginTop: "5px" }}>
                  Your website is the primary tool to convert curious visitors
                  into potential clients. Coco Creative is a full-service web
                  design agency in{" "}
                  <ExternalLink
                    href="https://en.wikipedia.org/wiki/Saskatoon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saskatoon
                  </ExternalLink>
                  . We will build a fully-custom modern website, professionally
                  designed and developed by our experts. From start to finish,
                  We will aid you in the process of designing, developing,
                  hosting, maintaining, and updating your website.
                </Paragraph>
              </TextGrid>
              <TextGrid>
                <ValueTextNum>02</ValueTextNum>
                <ValueHeading>Search Engine Optimization (SEO)</ValueHeading>
                <Paragraph style={{ color: "#fff", marginTop: "5px" }}>
                  For potential customers to find your website, strong SEO
                  (Search Engine Optimization) is necessary to earn top
                  positions. SEO success depends on various factors such as;
                  site speed, keywords, backlinks, etc.{" "}
                  <Link href="/services" passHref>
                    <InternalLink>
                      Coco Creative&apos;s SEO specialists
                    </InternalLink>
                  </Link>{" "}
                  will help attract qualified prospects to your website, helping
                  your stand above the competition in Saskatoon.
                </Paragraph>
              </TextGrid>
              <TextGrid style={{ borderBottom: "none" }}>
                <ValueTextNum>03</ValueTextNum>
                <ValueHeading>Consulting</ValueHeading>
                <Paragraph style={{ color: "#fff", marginTop: "5px" }}>
                  Our web design and development consulting services provide the
                  necessary advice for clients in{" "}
                  <ExternalLink
                    href="https://www.saskatoon.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saskatoon
                  </ExternalLink>{" "}
                  . Whether it is about custom WordPress websites, reliable web
                  hosting, or affordable web design, our experts will help you
                  make the right moves. Working closely with our experts, we
                  will develop a strategy for success.
                </Paragraph>
              </TextGrid>
            </TextWrap>
          </ColText>
        </ValueContentWrap>
      </ValueWrap>
    </ValueContainer>
  );
};

export default Services;
