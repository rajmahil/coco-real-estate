import styled from "styled-components";
import SampleTestImage from "../public/Images/SampleTestImage.png";
import ClientTestImage from "../public/Images/custom-construction-web-design-saskatoon-Schwinghammer-logo.png";
import { Paragraph, RedTextSpan, SectionHeading } from "../styles/global";
import Image from "next/image";
import testimonialsImage from "../public/Images/construction-website-designer-saskatoon-Schwinghammer-website.png";

const TestContainer = styled.div`
  width: auto;
  padding: 90px 0px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 975px) {
    padding: 45px 22px;
    flex-direction: column;
  }
`;
const TestWrap = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 975px) {
    flex-direction: column;
    width: 100%;
    max-width: auto;
    margin-top: 40px;
  }
`;

const TestImageWrap = styled.div`
  width: 55%;

  @media screen and (max-width: 975px) {
    width: 100%;
  }
`;

const TestImage = styled.div`
  width: auto;
`;

const TextWrap = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const ClientContentWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const ClientImageWrap = styled.div`
  width: 85px;
`;
const ClientTextWrap = styled.div`
  width: auto;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const ClientName = styled.h3`
  margin: 0px;
  margin-bottom: 3px;
  font-size: 1.2em;
`;

const Testimonials = () => {
  return (
    <TestContainer>
      <TestImageWrap>
        <TestImage>
          <Image
            src={testimonialsImage}
            alt="construction website designer in saskatoon - Schwinghammer website"
          />
        </TestImage>
      </TestImageWrap>

      <TestWrap>
        <SectionHeading>
          Our clients <RedTextSpan>trust us</RedTextSpan>.
        </SectionHeading>
        <TextWrap>
          <Paragraph style={{ marginTop: "-15px" }}>
            Coco Creative took the time to listen to the direction I wanted to
            go with my website, and put it into action. They always responded to
            my questions quickly, and we were able to get my new website up and
            running within the timeline we set out to keep.
          </Paragraph>
          <ClientContentWrap>
            <ClientImageWrap>
              <Image
                src={ClientTestImage}
                alt="custom construction web design in saskatoon - Schwinghammer logo"
              />
            </ClientImageWrap>
            <ClientTextWrap>
              <ClientName>Patrick Schwinghammer</ClientName>
              <Paragraph
                style={{
                  margin: "0px",
                  fontSize: "0.9em",
                  lineHeight: "22px",
                }}
              >
                Saskatoon, Saskatchewan
              </Paragraph>
            </ClientTextWrap>
          </ClientContentWrap>
        </TextWrap>
      </TestWrap>
    </TestContainer>
  );
};

export default Testimonials;
