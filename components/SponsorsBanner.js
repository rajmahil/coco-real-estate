import styled from "styled-components";
import Image from "next/image";
import caikoz from "../public/Images/caikoz.png";
import canary from "../public/Images/canary.png";
import collective from "../public/Images/collective.png";
import schwinghammer from "../public/Images/schwinghammer.png";
import urbanscape from "../public/Images/urbanscape.png";
import { AiFillStar } from "react-icons/ai";

const BannerContainer = styled.div`
  background: #f2eae2;
  height: 12vh;
  display: flex;
  align-items: center;
  padding: 0px 12px;

  @media screen and (max-width: 1090px) {
    height: auto;
    padding: 24px;
  }
`;
const BannerWrap = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 1090px) {
    align-items: center;
  }
`;
const ImageWrap = styled.div`
  width: 50%;
`;
const SponsorsText = styled.div`
  width: auto;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;

  @media screen and (max-width: 1090px) {
    text-align: center;
  }
`;
const StarWrap = styled.div`
  width: auto;
  color: #ce202f;
  font-size: 1.6em;
  padding: 5px 0px;
`;

const SponsorsBanner = () => {
  return (
    <BannerContainer>
      <BannerWrap>
        <GridWrap>
          <SponsorsText>Trusted by industry professionals:</SponsorsText>
          <StarWrap>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap style={{ width: "50%" }}>
            <Image src={caikoz} />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap style={{ width: "45%" }}>
            <Image src={canary} />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap style={{ width: "65%", paddingTop: "8px" }}>
            <Image src={collective} />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap style={{ width: "70%" }}>
            <Image src={schwinghammer} />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap style={{ width: "55%" }}>
            <Image src={urbanscape} />
          </ImageWrap>
        </GridWrap>
      </BannerWrap>
    </BannerContainer>
  );
};

export default SponsorsBanner;
