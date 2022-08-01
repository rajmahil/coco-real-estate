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
    <div className="bg-[#f2eae2] h-auto 1090:h-[12vh] flex items-center py-[20px] px-[10px] 1090:py-0 1090:px-[12px] ">
      <div className="grid auto-rows-[1fr] grid-cols-2 650:grid-cols-3 1090:grid-cols-6 gap-0 max-w-[1600px] ml-auto mr-auto">
        <div className="w-full flex flex-col items-center 1090:items-start justify-center">
          <h2 className="w-auto font-[600] text-[1em] uppercase mb-0 text-center 1090:text-left">
            Trusted by professionals <br /> in Saskatoon:
          </h2>
          <div className="w-auto text-red text-[1.6em] py-[5px] px-0 flex flex-row">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="sponsorGridWrap">
          <div
            className="sponsorImageWrap"
            style={{ width: `${windowDimensions < 600 ? "80%" : "75%"}` }}
          >
            <Image
              src={folkfest}
              alt="affordable-web design saskatoon - Folkfest"
            />
          </div>
        </div>
        <div className="sponsorGridWrap">
          <div
            className="sponsorImageWrap"
            style={{ width: `${windowDimensions < 600 ? "90%" : "75%"}` }}
          >
            <Image
              src={SaskHeartCentre}
              alt="custom web design Saskatoon- Saskatchewan Heart Centre"
            />
          </div>
        </div>
        <div className="sponsorGridWrap">
          <div
            className="sponsorImageWrap"
            style={{
              width: `${windowDimensions < 600 ? "95%" : "75%"}`,
              paddingTop: "8px",
            }}
          >
            <Image
              src={Heel}
              alt="trucking website design Saskatoon - Hoffman Elite Enterprises"
            />
          </div>
        </div>
        <div className="sponsorGridWrap">
          <div
            className="sponsorImageWrap"
            style={{ width: `${windowDimensions < 600 ? "100%" : "85%"}` }}
          >
            <Image
              src={schwinghammer}
              alt="Web design services Saskatoon - Schwinhammer logo"
            />
          </div>
        </div>
        <div className="sponsorGridWrap">
          <div
            className="sponsorImageWrap"
            style={{ width: `${windowDimensions < 600 ? "75%" : "65%"}` }}
          >
            <Image
              src={urbanscape}
              alt="Coco Creative - Website Developer - Urbanscape Custom Homes Saskatoon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsBanner;
