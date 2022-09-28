import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const MainCallToAction = () => {
  return (
    <div
      className="bg-red flex items-center justify-center py-[45px] px-[22px] 700:py-[90px] 700:px-[75px] "
      id="contactForm"
    >
      <div className="max-w-[1400px] text-white w-full flex flex-col 1250:flex-row items-start 1250:items-center justify-between ">
        <div className="text-white w-full 1250:w-[50%] flex items-start justify-center flex-col max-w-[600px] ">
          <h2 className="sectionHeading">Ready to get started? </h2>
          <div className="sectionParagraph text-white ">
            Fill out this quick form to get in touch. We promise to respond
            within 24 hours to discuss to your project.
            <br />
            <br />
            You can also reach us by direct email, call or text.
            <div className="flex flex-col 1320:flex-row flex-wrap items-start 1320:items-center mt-10">
              <div className="flex flex-row w-fit 1320:mb-0 mb-3 items-center p-2 border-2 border-white cursor-pointer relative bottom-0 hover:bottom-1 transition-all">
                <div className="text-[1.6em]">
                  <FaPhoneAlt />
                </div>
                <a
                  passHref
                  href="tel:306-716-3130"
                  className="text-[1em] 975:text-[1.4em] ml-2 font-medium"
                >
                  (306) 716-3130
                </a>
              </div>
              <div className="flex flex-row  w-fit  items-center ml-0  1320:ml-6  p-2 border-2 border-white cursor-pointer relative bottom-0  hover:bottom-1 transition-all">
                <div className="text-[1.6em]">
                  <FaEnvelope />
                </div>
                <a
                  passHref
                  href="mailto:info@cococreativeweb.com"
                  className="text-[1em] 975:text-[1.4em] ml-2 font-medium"
                >
                  info@cococreativeweb.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full 1250:w-[50%] text-black flex items-start 975:items-center justify-center flex-col 1250:mt-0 mt-10">
          <div className="bg-white h-fit p-5 975:p-10 w-full max-w-[500px]">
            <ContactForm wScreen={false} text={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCallToAction;
