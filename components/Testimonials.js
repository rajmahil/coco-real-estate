import styled from "styled-components";
import SampleTestImage from "../public/Images/SampleTestImage.png";
import ClientTestImage from "../public/Images/ClientTestImage.png";
import { Paragraph, RedTextSpan, SectionHeading } from "../styles/global";
import Image from "next/image";

const TestContainer = styled.div`
  width: auto;
  padding: 90px 75px;

  @media screen and (max-width: 975px) {
    padding: 45px 22px;
  }
`;
const TestWrap = styled.div`
  width: auto;
  display: flex;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 975px) {
    flex-direction: column;
  }
`;
const TestColImage = styled.div`
  width: 55%;
  padding-right: 45px;

  @media screen and (max-width: 975px) {
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const TestColText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 975px) {
    width: 100%;
    padding-top: 24px;
  }
`;
const TextWrap = styled.div`
  width: auto;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
const ClientContentWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
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
      <TestWrap>
        <TestColImage>
          <Image src={SampleTestImage} />
        </TestColImage>
        <TestColText>
          <TextWrap>
            <SectionHeading>
              Our clients <RedTextSpan>trust us</RedTextSpan>.
            </SectionHeading>
            <Paragraph>
              Coco Creative took the time to listen to the direction I wanted to
              go with my website, and put it into action. They always responded
              to my questions quickly, and we were able to get my new website up
              and running within the timeline we set out to keep.
            </Paragraph>
            <ClientContentWrap>
              <ClientImageWrap>
                <Image src={ClientTestImage} />
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
                  Schwinghammer Construction
                </Paragraph>
                <Paragraph
                  style={{
                    margin: "0px",
                    fontSize: "0.9em",
                    lineHeight: "22px",
                  }}
                >
                  Owner/Operator
                </Paragraph>
              </ClientTextWrap>
            </ClientContentWrap>
          </TextWrap>
        </TestColText>
      </TestWrap>
    </TestContainer>
  );
};

export default Testimonials;
