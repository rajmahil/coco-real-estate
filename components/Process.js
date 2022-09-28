import React from "react";
import Image from "next/image";
import processImageOne from "../public/Images/processImageOne.png";
import processImageTwo from "../public/Images/processImageTwo.png";
import processImageThree from "../public/Images/processImageThree.png";

const Process = () => {
  return (
    <div className="py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex flex-col items-center justify-center bg-lightGrey">
      <h2 className="sectionHeading text-center max-w-[628px] ml-auto mb-[45px]">
        Our <span className="text-red">Process</span>
      </h2>
      <div className="max-w-[850px] w-full">
        <div className="processColContainer">
          <div className="processColLeft">
            <div className="processNumber">01</div>
            <h3 className="servicesHeading font-medium">Introduction</h3>
            <p className="sectionParagraph">
              Before we get started, it&apos;s crucial to set goals on what
              you&apos;d like to achieve. Our initial meeting will help us
              determine your expectations, allowing us to craft a methodical
              approach to ensure success. In the initial meeting, We&apos;ll
              briefly analyze your current digital marketing infrastructure and
              create unique benchmarks to measure your success from.
            </p>
          </div>
          <div className="processColRight">
            <Image
              src={processImageOne}
              alt="Coco Creative, web design in Saskatoon"
            />
          </div>
        </div>
        <div className="processColContainer">
          <div className="processColLeft">
            <div className="processNumber">02</div>
            <h3 className="servicesHeading font-medium">Strategy</h3>
            <p className="sectionParagraph">
              Planning is critical in order to achieve goals and allows for more
              efficient use of time and other resources. During the planning
              phase, we collaborate with the client and experts from various
              different backgrounds to develop an actionable strategy.
            </p>
          </div>
          <div className="processColRight">
            <Image
              src={processImageTwo}
              alt="Coco Creative, web design in Saskatoon"
            />
          </div>
        </div>
        <div className="processColContainer">
          <div className="processColLeft">
            <div className="processNumber">03</div>
            <h3 className="servicesHeading font-medium">Implementation</h3>
            <p className="sectionParagraph">
              Once the strategy is finalized, We&apos;ll put the plan into
              action. Communication is key, we&apos;ll provide regular updates
              on the progress of your project. Our experienced staff will ensure
              the project is successful. We&apos;ll continue to strive for
              improvements until the client is fully satisfied with our work.
            </p>
          </div>
          <div className="processColRight">
            <Image
              src={processImageThree}
              alt="Coco Creative, web design in Saskatoon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
