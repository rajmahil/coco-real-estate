import React from "react";
import Image from "next/image";
import bioBackground from "../public/Images/bioBackground.png";
import rajMahilImage from "../public/Images/rajMahilImage.png";
import RajMahilSignature from "../public/Images/RajMahilSignature.png";

const RajBio = () => {
  return (
    <div className="py-[45px] px-[26px] 750:py-[90px] 750:px-[75px] relative flex items-center justify-center ">
      <div className="absolute z-[-1] top-0 1190:top-[8%] 1700:left-[12%] left-0 1190:left-[8%] w-[250px] 1190:w-[350px]">
        <Image src={bioBackground} />
      </div>
      <div className="w-full max-w-[1240px] flex items-center justify-center 1250:flex-row flex-col">
        <div className="w-full flex mr-auto 1250:mr-[75px] max-w-[650px] overflow-hidden ">
          <div className="w-full relative 1190:h-[700px] 450:h-[600px] 375:h-[400px] h-[350px]">
            <Image src={rajMahilImage} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="1250:w-[45%] w-full 1250:mt-0 mt-[45px]">
          <h2 className="sectionHeading">
            Passion meets <span className="text-red">expertise</span>.
          </h2>{" "}
          <p className="sectionParagraph">
            I started Coco Creative 5 years ago intending to level the playing
            field for local construction businesses. As the digital revolution
            continues, many small businesses struggle to keep pace. Oftentimes,
            business owners realize the importance of digital presence but are
            unable to take the necessary action. With many different digital
            marketing options, business owners are constantly bombarded. They
            often don&apos;t know who to trust, what to do, or where to start.{" "}
            <br />
            <br /> At Coco Creative,
            <span className="font-bold text-black">
              {" "}
              our goal is to equip local businesses with tools to help level the
              playing field against bigger businesses. We believe in an
              authentic and human approach to customer service. Our experts will
              lay out a clear plan specifically for your business to achieve
              desired results.
            </span>
            <br />
            <br /> I look forward to working with your business.
          </p>
          <Image src={RajMahilSignature} alt="Raj Mahil Signature" />
          <h3 className="text-[1.4em] mt-[10px] mb-0 leading-[10px]">
            Raj Mahil
          </h3>
          <p className="sectionParagraph">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default RajBio;
