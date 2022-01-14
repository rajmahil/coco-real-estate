import styled from "styled-components";
import {
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";
import Image from "next/image";
import Bhowmick from "../public/Images/Bhowmick.png";
import {
  MdOutlineSell,
  MdMobileFriendly,
  MdOutlineDesignServices,
} from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import SectionButton from "./custom/SectionButton";

const FeaturedContainer = styled.div`
  padding: 90px 75px;

  @media screen and (max-width: 575px) {
    padding: 45px 22px;
  }
`;
const FeaturedWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentWrap = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
  }
`;
const ImageWrap = styled.div`
  width: 50%;

  @media screen and (max-width: 1090px) {
    width: 90%;
  }

  @media screen and (max-width: 775px) {
    width: 100%;
  }
`;
const ContentTextWrap = styled.div`
  width: 50%;
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1090px) {
    width: 90%;
    padding-left: 0px;
  }

  @media screen and (max-width: 775px) {
    width: 100%;
  }
`;
const FeaturesWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 45px 0px 0px 0px;
  flex-wrap: wrap;
  justify-content: center;
`;
const FeaturesCol = styled.div`
  width: 25%;
  padding: 20px;
  min-width: 300px;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
const IconWrap = styled.div`
  width: auto;
  font-size: 3em;
  color: #ce202f;
`;
const FeaturesHeading = styled.h3`
  font-size: 1.6em;
  color: #ce202f;
  margin: 0px;
`;
const FeaturesPara = styled.p`
  font-size: 0.9em;
  margin-top: 10px;
  line-height: 25px;
  color: #747474;
`;
const BoldText = styled.p`
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 1.4em;
`;

const FeaturedProject = () => {
  return (
    <FeaturedContainer>
      <FeaturedWrap>
        <TextWrap>
          <SectionHeading>
            Featured <RedTextSpan>Project</RedTextSpan>
          </SectionHeading>
        </TextWrap>
        <ContentWrap>
          <ImageWrap>
            <Image src={Bhowmick} />
          </ImageWrap>
          <ContentTextWrap>
            <BoldText>
              At quam vestibulum, elementum lorem sed, laoreet ligula.
            </BoldText>
            <Paragraph style={{ marginTop: "5px" }}>
              At quam vestibulum, elementum lorem sed, laoreet ligula. Donec
              euismod, purus at dictum faucibus, turpis enim lobortis ligula, in
              ornare mi libero eu felis. Vestibulum metus tortor, convallis sed
              tortor sagittis, accumsan fermentum sem. Vestibulum finibus justo
              risus, sed condimentum dui laoreet vel. Donec at eros quis sem
              vulputate scelerisque luctus nec metus. Vivamus nulla sapien,
              vestibulum id tortor porttitor, suscipit eleifend odio. Cras
              semper egestas pulvinar.
            </Paragraph>
            <SectionButton
              innerHTML="View Website"
              Href="https://www.bhowmickrealty.com/"
            />
          </ContentTextWrap>
        </ContentWrap>
        <FeaturesWrap>
          <FeaturesCol>
            <IconWrap>
              <MdOutlineSell />
            </IconWrap>
            <FeaturesHeading>Sales-Driving Features</FeaturesHeading>
            <FeaturesPara>
              Your marketing efforts are a direct reflection of how you'll
              market your client's home. Show them you're the best in the biz.
            </FeaturesPara>
          </FeaturesCol>
          <FeaturesCol>
            <IconWrap>
              <MdMobileFriendly />
            </IconWrap>
            <FeaturesHeading>Fully Responsive</FeaturesHeading>
            <FeaturesPara>
              Your marketing efforts are a direct reflection of how you'll
              market your client's home. Show them you're the best in the biz.
            </FeaturesPara>
          </FeaturesCol>
          <FeaturesCol>
            <IconWrap>
              <BsClipboardData />
            </IconWrap>
            <FeaturesHeading>Listings & IDX</FeaturesHeading>
            <FeaturesPara>
              Your marketing efforts are a direct reflection of how you'll
              market your client's home. Show them you're the best in the biz.
            </FeaturesPara>
          </FeaturesCol>
          <FeaturesCol>
            <IconWrap>
              <MdOutlineDesignServices />
            </IconWrap>
            <FeaturesHeading>Memorable Design</FeaturesHeading>
            <FeaturesPara>
              Your marketing efforts are a direct reflection of how you'll
              market your client's home. Show them you're the best in the biz.
            </FeaturesPara>
          </FeaturesCol>
        </FeaturesWrap>
      </FeaturedWrap>
    </FeaturedContainer>
  );
};

export default FeaturedProject;
