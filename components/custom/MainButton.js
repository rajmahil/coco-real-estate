import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MainButton = ({ text, widthAuto }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {widthAuto ? (
        <div
          className={`w-[340px] py-[10px] px-[25px] ${
            isHover ? "bg-black" : "bg-red"
          } text-white cursor-pointer flex items-center transition-all`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="text-[1.1em] leading-0 whitespace-nowrap font-medium">
            {text}
          </div>
          <div
            className={`w-auto leading-0 text-[1.5em] relative transition-all font-medium ${
              isHover ? "ml-[10px]" : "ml-[5px]"
            }`}
            isHover={isHover}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      ) : (
        <div
          className={`w-[170px] py-[10px] px-[25px] ${
            isHover ? "bg-black" : "bg-red"
          } text-white cursor-pointer flex items-center transition-all h-full`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
          widthAuto={widthAuto}
        >
          <div className="text-[1.1em] leading-0 whitespace-nowrap font-medium">
            {text}
          </div>
          <div
            className={`w-auto leading-0 text-[1.5em] relative transition-all font-medium ${
              isHover ? "ml-[10px]" : "ml-[5px]"
            }`}
            isHover={isHover}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      )}
    </>
  );
};

export default MainButton;
