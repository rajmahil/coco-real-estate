import React from "react";
import PageHeader from "../../components/PageHeader";
import ValuePropImage from "../../public/Images/ValuePropImage.png";
import Image from "next/image";

const EcommerceWebDevelopment = () => {
  return (
    <div>
      <PageHeader
        heading="E-Commerce"
        textSpan="Web Develoment"
        paragraph="Beautiful eCommerce web development in Saskatoon, SK"
      />
      <div
        className={`py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex  items-center justify-center 1200:flex-row w-full flex-col bg-white`}
      >
        <div className={`w-full 1200:w-[45%] flex 1200:justify-end`}>
          <div className="max-w-[600px]">
            <Image src={ValuePropImage} />
          </div>
        </div>
        <div
          className={`w-full mt-10 1200:w-[45%] flex items-center 1200:ml-[40px] justify-start`}
        >
          <div className="max-w-[600px]">
            <h2 className="sectionHeading">Heading</h2>
            <div className="sectionParagraph">paragraph</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceWebDevelopment;
