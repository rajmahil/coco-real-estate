import Link from "next/link";
import { useState, useEffect } from "react";
import heroVidOverlay from "../public/Images/heroVidOverlay.png";
import Image from "next/image";
import HeroImage1 from "../public/Images/HeroImages/heroImage1.png";
import HeroImage2 from "../public/Images/HeroImages/heroImage2.png";
import HeroImage3 from "../public/Images/HeroImages/heroImage3.png";
import HeroImage4 from "../public/Images/HeroImages/heroImage4.png";
import HeroImage5 from "../public/Images/HeroImages/heroImage5.png";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currImage, setCurrImage] = useState(0);
  const HeroWords = [
    "affordable",
    "attractive",
    "results-oriented",
    "mobile-responsive",
  ];

  const heroImages = [
    { imageUrl: HeroImage1, imageAlt: "custom web design saskatoon" },
    {
      imageUrl: HeroImage2,
      imageAlt: "custom wordpress websites saskatchewan",
    },
    { imageUrl: HeroImage3, imageAlt: "ecommerce website design saskatoon" },
    { imageUrl: HeroImage4, imageAlt: "digital marketing agency canada" },
    { imageUrl: HeroImage5, imageAlt: "hydrovac website design" },
  ];

  const NextWord = () => {
    currentWord === HeroWords.length - 1
      ? setCurrentWord(0)
      : setCurrentWord(currentWord + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextWord();
      currImage === heroImages.length - 1
        ? setCurrImage(0)
        : setCurrImage((currImage) => currImage + 1);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-auto h-auto 1000:h-[88vh] flex 1000:flex-row flex-col">
      <div className="w-full 1000:w-[55%] h-full flex flex-col items-center justify-center pt-[150px] pr-[12px] pb-[25px]  1000:p-0  pl-[12px]">
        <div className="pl-2 w-auto max-w-[720px] flex flex-col justify-start">
          <h1 className="w-auto leading-[50px] 500:leading-[60px] text-[2em] 500:text-[3em] font-black m-0 ">
            Grow your business with{" "}
            <span className="text-[#ce202f]">{HeroWords[currentWord]}</span> web
            design.
          </h1>
          <p className="text-[#4f4f4f] leading-[30px] text-[1em] 500:text-[1.1em] mt-2 font-regular max-w-[600px] mb-[28px]">
            Coco Creative is a modern web design agency located in Saskatoon,
            SK. We build stunning custom websites that boost revenue by
            generating quality leads, helping you stand above the competition.{" "}
            <span className="font-bold text-black">
              Ready to grow your business?
            </span>
          </p>
          <div className="flex flex-wrap items-center">
            <Link href="/contact" passHref>
              <div className="globalButton">Get A Quote</div>
            </Link>
            <Link href="/projects" passHref>
              <div className="secGlobalButton">View Portfolio</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] 1000:w-[45%] 1000:h-full overflow-hidden relative ">
        <div className="z-10 w-full h-[88vh] absolute">
          <Image src={heroVidOverlay} layout="fill" objectFit="cover" />
        </div>
        {/* <HeroVideo loop autoPlay muted>
          <source
            src="https://res.cloudinary.com/dkmlwbskl/video/upload/v1653597789/heroVideo_ekqtwg.mp4"
            type="video/mp4"
          />
        </HeroVideo> */}
        <div className="w-auto relative h-[88vh] flex items-center justify-center">
          <Image
            src={heroImages[currImage].imageUrl}
            alt={heroImages[currImage].imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
