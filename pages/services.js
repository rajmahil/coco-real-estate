import React from "react";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import servicesMainImage from "../public/Images/servicesMainImage.png";
import servicesMainImage2 from "../public/Images/servicesMainImage2.png";
import { Paragraph, RedTextSpan, SectionHeading } from "../styles/global";
import ValueBgTwo from "../public/Images/ValueBgTwo.png";
import ValuePropImage from "../public/Images/ValuePropImage.png";
import { BiLandscape, BiVolumeFull, BiWrench } from "react-icons/bi";
import processImageOne from "../public/Images/processImageOne.png";
import processImageTwo from "../public/Images/processImageTwo.png";
import processImageThree from "../public/Images/processImageThree.png";

export const SectionWrap = styled.div`
  padding: 90px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${ValueBgTwo.src});
  background-position: 0% 50%;
  background-size: 330px;
  background-repeat: no-repeat;

  @media screen and (max-width: 650px) {
    padding: 45px 22px;
  }
`;
const SectionContainer = styled.div`
  max-width: 1240px;
  width: 100%;
`;
const ContentWrap = styled.div`
  max-width: 628px;
  width: 100%;
`;
const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const PhoneImage = styled.img`
  width: 290px;
`;
const PhoneImage2 = styled.img`
  width: 290px;

  @media screen and (max-width: 650px) {
    display: none;
    width: 100%;
  }
`;
const CardsWrap = styled.div`
  padding: 25px 0px;
  border-bottom: dashed 1px #fff;
`;
const ColContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1075px) {
    flex-direction: column;
  }
`;
const Col65 = styled.div`
  width: 65%;
  padding-right: 45px;

  @media screen and (max-width: 1075px) {
    width: 100%;
  }
`;
const Col35 = styled.div`
  width: 35%;

  @media screen and (max-width: 1075px) {
    width: 100%;
    max-width: 600px;
  }
`;
const IconWrap = styled.div`
  color: #fff;
  font-size: 4em;
  line-height: 10px;
`;
const SectionThreeHeading = styled.h3`
  color: #fff;
  margin-top: 10px;
  margin-bottom: 3px;
  font-size: 1.6em;
  line-height: 35px;
`;
const ProcessNumber = styled.div`
  font-size: 4em;
  color: #c5c5c5;
  font-weight: 800;
  line-height: 45px;
`;

const ProcessColContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const ProcessColLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ProcessColRight = styled.div`
  width: 50%;
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0px;
  }
`;

const Services = () => {
  return (
    <>
      <PageHeader
        heading="Trusted professional services to help"
        textSpan="grow your business"
        paragraph="Our emphasis on strategy coupled with a results-first approach ensures more leads and more clientele for your construction business."
      />
      <SectionWrap>
        <ContentWrap>
          <SectionHeading style={{ textAlign: "center" }}>
            We provide <RedTextSpan>purpose-driven web design</RedTextSpan>,
            small business marketing & Search Engine Optimization services.
          </SectionHeading>
          <ImageWrap>
            <PhoneImage
              src={servicesMainImage2.src}
              alt="Web Development Services Saskatoon, Coco Creative"
            />
            <PhoneImage2
              src={servicesMainImage.src}
              alt="Web Development Services Saskatoon, Coco Creative"
            />
          </ImageWrap>
        </ContentWrap>
      </SectionWrap>
      <SectionWrap
        style={{
          background: "#222",
          backgroundPosition: "5% 82%",
          backgroundRepeat: "no-repeat !important",
        }}
      >
        <SectionContainer>
          <SectionHeading
            style={{
              textAlign: "left",
              color: "#fff",
              maxWidth: "628px",
              marginBottom: "26px",
            }}
          >
            We provide purpose-driven web design, small business marketing &
            Search Engine Optimization services.
          </SectionHeading>
          <ColContainer>
            <Col65>
              <Image src={ValuePropImage} />
            </Col65>
            <Col35>
              <CardsWrap>
                <IconWrap>
                  <BiLandscape />
                </IconWrap>
                <SectionThreeHeading>
                  Web Design & Development
                </SectionThreeHeading>
                <Paragraph>
                  Your website is the primary tool to convert curious visitors
                  into potential clients. We&apos;ll build a modern
                  mobile-friendly website, professionally designed and developed
                  by our experts.
                </Paragraph>
              </CardsWrap>
              <CardsWrap>
                <IconWrap>
                  <BiVolumeFull />
                </IconWrap>
                <SectionThreeHeading>
                  Small Business Marketing
                </SectionThreeHeading>
                <Paragraph>
                  We’ll analyze your current digital presence and provide proven
                  digital marketing strategies to help your small business grow,
                  while using your budget with maximum efficiency.
                </Paragraph>
              </CardsWrap>
              <CardsWrap style={{ borderBottom: "none" }}>
                <IconWrap>
                  <BiWrench />
                </IconWrap>
                <SectionThreeHeading>
                  Search Engine Optimization
                </SectionThreeHeading>
                <Paragraph>
                  For potential customers to find your website, strong SEO
                  (Search Engine Optimization) is necessary to earn top
                  positions. Our SEO services will help attract targeted and
                  qualified prospects to your website.
                </Paragraph>
              </CardsWrap>
            </Col35>
          </ColContainer>
        </SectionContainer>
      </SectionWrap>
      <SectionWrap>
        <SectionHeading
          style={{
            textAlign: "center",
            maxWidth: "628px",
            marginLeft: "auto",
            marginBottom: "45px",
          }}
        >
          Here is something about our process and how great we are!
        </SectionHeading>
        <ContentWrap style={{ maxWidth: "850px" }}>
          <ProcessColContainer>
            <ProcessColLeft>
              <ProcessNumber>01</ProcessNumber>
              <SectionThreeHeading style={{ color: "#000" }}>
                Introduction
              </SectionThreeHeading>
              <Paragraph>
                Before we get started, it&apos;s crucial to set goals on what
                you&apos;d like to achieve. Our initial meeting will help us
                determine your expectations, allowing us to craft a methodical
                approach to ensure success. In the initial meeting, We&apos;ll
                briefly analyze your current digital marketing infrastructure
                and create unique benchmarks to measure your success from.
              </Paragraph>
            </ProcessColLeft>
            <ProcessColRight>
              <Image
                src={processImageOne}
                alt="Coco Creative, web design in Saskatoon"
              />
            </ProcessColRight>
          </ProcessColContainer>
          <ProcessColContainer>
            <ProcessColLeft>
              <ProcessNumber>02</ProcessNumber>
              <SectionThreeHeading style={{ color: "#000" }}>
                Strategy
              </SectionThreeHeading>
              <Paragraph>
                Planning is critical in order to achieve goals and allows for
                more efficient use of time and other resources. During the
                planning phase, we collaborate with the client and experts from
                various different backgrounds to develop an actionable strategy.
              </Paragraph>
            </ProcessColLeft>
            <ProcessColRight>
              <Image
                src={processImageTwo}
                alt="Coco Creative, web design in Saskatoon"
              />
            </ProcessColRight>
          </ProcessColContainer>
          <ProcessColContainer>
            <ProcessColLeft>
              <ProcessNumber>03</ProcessNumber>
              <SectionThreeHeading style={{ color: "#000" }}>
                Implementation
              </SectionThreeHeading>
              <Paragraph>
                Once the strategy is finalized, We&apos;ll put the plan into
                action. Communication is key, we&apos;ll provide regular updates
                on the progress of your project. Our experienced staff will
                ensure the project is successful. We&apos;ll continue to strive
                for improvements until the client is fully satisfied with our
                work.
              </Paragraph>
            </ProcessColLeft>
            <ProcessColRight>
              <Image
                src={processImageThree}
                alt="Coco Creative, web design in Saskatoon"
              />
            </ProcessColRight>
          </ProcessColContainer>
        </ContentWrap>
      </SectionWrap>
    </>
  );
};

export default Services;
