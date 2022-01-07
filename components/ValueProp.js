import styled from "styled-components";
import { Paragraph, RedTextSpan, SectionHeading } from "../styles/global";
import Image from "next/image";
import ValuePropImage from "../public/Images/ValuePropImage.png";
import ValueBgOne from "../public/Images/ValueBgOne.png";
import ValueBgTwo from "../public/Images/ValueBgTwo.png";

const ValueContainer = styled.div`
  background: #f8f8f8;
  background-image: url(${ValueBgOne.src}), url(${ValueBgTwo.src});
  background-size: 200px, 200px;
  background-repeat: no-repeat;
  background-position: 100% 0%, 10% 98%;
  width: auto;
  padding: 90px 75px;

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
  width: 65%;
  padding-right: 45px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0px;
    margin-bottom: 24px;
  }
`;
const ColText = styled.div`
  width: 35%;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  width: auto;
  max-width: 450px;
`;
const TextGrid = styled.div`
  padding: 15px;
  border-bottom: 1px #000 dashed;
  margin-bottom: 15px;

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
  color: #c5c5c5;
  font-size: 4em;
  line-height: 50px;
  font-weight: 900;
`;
const ValueHeading = styled.h3`
  font-size: 1.6em;
  margin-top: 10px;
`;

const ValueProp = () => {
  return (
    <ValueContainer>
      <ValueWrap>
        <HeadingWrap>
          <SectionHeading>
            Your website should work as hard as you. We'll build a website that
            helps <RedTextSpan>grow your business</RedTextSpan>.
          </SectionHeading>
        </HeadingWrap>
        <ValueContentWrap>
          <ColImage>
            <Image src={ValuePropImage} />
          </ColImage>
          <ColText>
            <TextWrap>
              <TextGrid>
                <ValueTextNum>01</ValueTextNum>
                <ValueHeading>
                  Generate qualified leads & boost revenue
                </ValueHeading>
                <Paragraph>
                  Since the majority of your leads come from referrals,
                  credibility and trust are crucial. We'll build a website that
                  reflects your dedication and work ethic, creating a strong
                  lasting impression.
                </Paragraph>
              </TextGrid>
              <TextGrid>
                <ValueTextNum>02</ValueTextNum>
                <ValueHeading>
                  Build credibility & create strong first impressions
                </ValueHeading>
                <Paragraph>
                  Since the majority of your leads come from referrals,
                  credibility and trust are crucial. We'll build a website that
                  reflects your dedication and work ethic, creating a strong
                  lasting impression.
                </Paragraph>
              </TextGrid>
              <TextGrid style={{ borderBottom: "none" }}>
                <ValueTextNum>03</ValueTextNum>
                <ValueHeading>Engage and grow your audience</ValueHeading>
                <Paragraph>
                  Since the majority of your leads come from referrals,
                  credibility and trust are crucial. We'll build a website that
                  reflects your dedication and work ethic, creating a strong
                  lasting impression.
                </Paragraph>
              </TextGrid>
            </TextWrap>
          </ColText>
        </ValueContentWrap>
      </ValueWrap>
    </ValueContainer>
  );
};

export default ValueProp;
