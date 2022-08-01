import React from "react";
import Image from "next/image";
import PageHeaderTwo from "../public/Images/pageHeaderTwo.png";

const PageHeader = ({ heading, textSpan, paragraph, projectLink }) => {
  return (
    <div
      className="relative h-[450px] pt-[90px] pb-0 flex items-center justify-center text-center"
      style={{
        background:
          "linear-gradient(180deg,rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="absolute w-full h-[450px] top-0 left-0 z-[-5]">
        <Image src={PageHeaderTwo} layout="fill" objectFit="cover" />
      </div>
      <div className="max-w-[650px] flex flex-col items-center justify-center">
        <h1 className="text-[3.2em] font-extrabold text-center ml-auto mr-auto mb-[5px] mt-0">
          {heading}
          <span className="text-red"> {textSpan}</span>
        </h1>
        <p className="text-[1.2em]">{paragraph}</p>
      </div>
    </div>
  );
};

export default PageHeader;
