import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";
import schwinghammer from "../public/Images/web-design-services-schwinghammer.png";
import urbanscape from "../public/Images/urbanscape.png";
import folkfest from "../public/Images/affordable-web-design-saskatoon-Folkfest.png";
import SaskHeartCentre from "../public/Images/custom-web-design-sask-heart-centre.png";
import Heel from "../public/Images/trucking-website-design-saskatoon- Hoffmain Elite Enterprises.png";
import { AiFillStar } from "react-icons/ai";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

const BannerContainer = styled.div`
  background: #f2eae2;
  height: 12vh;
  display: flex;
  align-items: center;
  padding: 0px 12px;

  @media screen and (max-width: 1090px) {
    height: auto;
    padding: 20px 10px;
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
const SponsorsText = styled.h2`
  width: auto;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  margin-bottom: 0px;

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
  const [windowDimensions, setWindowDimensions] = useState(0);
  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BannerContainer>
      <BannerWrap>
        <GridWrap>
          <SponsorsText>
            Trusted by professionals <br /> in Saskatoon:
          </SponsorsText>
          <StarWrap>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap
            style={{ width: `${windowDimensions < 600 ? "80%" : "75%"}` }}
          >
            <Image
              src={folkfest}
              alt="affordable-web design saskatoon - Folkfest"
            />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap
            style={{ width: `${windowDimensions < 600 ? "90%" : "75%"}` }}
          >
            <Image
              src={SaskHeartCentre}
              alt="custom web design Saskatoon- Saskatchewan Heart Centre"
            />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap
            style={{
              width: `${windowDimensions < 600 ? "95%" : "75%"}`,
              paddingTop: "8px",
            }}
          >
            <Image
              src={Heel}
              alt="trucking website design Saskatoon - Hoffman Elite Enterprises"
            />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap
            style={{ width: `${windowDimensions < 600 ? "100%" : "85%"}` }}
          >
            <Image
              src={schwinghammer}
              alt="Web design services Saskatoon - Schwinhammer logo"
            />
          </ImageWrap>
        </GridWrap>
        <GridWrap>
          <ImageWrap
            style={{ width: `${windowDimensions < 600 ? "75%" : "65%"}` }}
          >
            <Image
              src={urbanscape}
              alt="Coco Creative - Website Developer - Urbanscape Custom Homes Saskatoon"
            />
          </ImageWrap>
        </GridWrap>
      </BannerWrap>
    </BannerContainer>
  );
};

export default SponsorsBanner;
