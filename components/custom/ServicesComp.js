import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServicesComp = ({ icon, heading, subHeading, link, index }) => {
  return (
    <Link scrollSmooth passHref href={link} key={index}>
      <div className="500:w-[400px] 1500:w-[450px] shadow-lg flex flex-col items-center justify-center p-4 500:p-6 1500:p-8 text-center m-2 1300:m-5">
        <div className="text-[4.4em] text-red mb-3">{icon}</div>
        <h3 className="text-[1.2em] 1500:text-[1.4em] font-medium">
          {heading}
        </h3>
        <p className="text-grey">{subHeading}</p>
        <div className="mt-5 text-[1.2em] font-medium flex flex-row items-center group  transition-all duration-300 ease-out cursor-pointer">
          Learn More{" "}
          <div className="ml-2 font-bold text-[1.2em] relative group-hover:ml-[20px] transition-all duration-300 ease-out">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServicesComp;
