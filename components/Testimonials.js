import ClientTestImage from "../public/Images/custom-construction-web-design-saskatoon-Schwinghammer-logo.png";
import Image from "next/image";
import testimonialsImage from "../public/Images/construction-website-designer-saskatoon-Schwinghammer-website.png";

const Testimonials = () => {
  return (
    <div className="w-auto py-[45px] px-[22px] 975:px-0 975:py-[90px] ml-auto mr-auto max-w-[1400px] flex flex-col 975:flex-row items-center">
      <div className="w-full 975:w-[55%]">
        <div className="w-auto">
          <Image
            src={testimonialsImage}
            alt="construction website designer in saskatoon - Schwinghammer website"
          />
        </div>
      </div>
      <div className="w-full 975:w-[45%] flex flex-col justify-start items-center max-w-[500px] ml-auto mr-auto 975:mt-0 mt-[40px]">
        <div className="sectionHeading">
          Our clients <span className="text-red">trust us</span>.
        </div>
        <div className="w-auto ml-auto mr-auto max-w-[700px] flex flex-col mt-[5px]">
          <p className="sectionParagraph mt-[0px] mb-[25px]">
            Coco Creative took the time to listen to the direction I wanted to
            go with my website, and put it into action. They always responded to
            my questions quickly, and we were able to get my new website up and
            running within the timeline we set out to keep.
          </p>
          <div className="w-auto flex flex-row justify-start">
            <div className="w-[85px]">
              <Image
                src={ClientTestImage}
                alt="custom construction web design in saskatoon - Schwinghammer logo"
              />
            </div>
            <div className="w-auto pl-[10px] flex flex-col justify-center items-start">
              <h3 className="m-0 mb-[3px] text-[1.2em]">
                Patrick Schwinghammer
              </h3>
              <p className="sectionParagraph m-0 text-[0.9em] leading-[22px]">
                Saskatoon, Saskatchewan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
