import React from "react";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import servicesMainImage from "../public/Images/servicesMainImage.png";
import servicesMainImage2 from "../public/Images/servicesMainImage2.png";
import ValuePropImage from "../public/Images/ValuePropImage.png";
import { BiLandscape, BiVolumeFull, BiWrench } from "react-icons/bi";
import processImageOne from "../public/Images/processImageOne.png";
import processImageTwo from "../public/Images/processImageTwo.png";
import processImageThree from "../public/Images/processImageThree.png";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | Coco Creative Saskatoon</title>
        <meta
          name="description"
          content="At Coco Creative, we offer various services to meet your business needs. Whether it is modern website design, eCommerce stores, custom WordPress websites, Search Engine Optimization (SEO) or relaible hosting, we have you covered! .
          "
        />
        <meta
          property="og:title"
          content="Our Services | Coco Creative Saskatoon"
        />
        <meta
          property="og:description"
          content="At Coco Creative, we offer various services to meet your business needs. Whether it is modern website design, eCommerce stores, custom WordPress websites, Search Engine Optimization (SEO) or relaible hosting, we have you covered! "
        />
        <link rel="canonical" href="https://cococreativeweb.com/services" />
        <meta property="og:type" content="website" />
      </Head>
      <PageHeader
        heading="Trusted "
        textSpan="Services"
        paragraph="Our emphasis on strategy coupled with a results-first approach ensures more leads and more clientele for your construction business."
      />
      <div className="py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex flex-col items-center justify-center ">
        <div className="max-w-[628px] w-full">
          <h2 className="sectionHeading text-center">
            We provide{" "}
            <span className="text-red">purpose-driven web design</span>, small
            business marketing & Search Engine Optimization services.
          </h2>
          <div className="flex flex-wrap 650:flex-row flex-col items-center justify-center mt-[15px]">
            <div className="relative 750:h-[500px] 750:w-[40%]  h-[800px] w-[80%]">
              <Image
                layout="fill"
                src={servicesMainImage2.src}
                alt="Web Development Services Saskatoon, Coco Creative"
              />
            </div>
            <div className="relative 750:h-[500px] 750:w-[40%]  h-[800px] w-[80%]">
              <Image
                layout="fill"
                src={servicesMainImage.src}
                alt="Web Development Services Saskatoon, Coco Creative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex flex-col items-center justify-center bg-[#222]">
        <div className="max-w-[1240px] w-full">
          <h2 className="sectionHeading text-left text-white max-w-[628px] mb-[26px]">
            We provide purpose-driven web design, small business marketing &
            Search Engine Optimization services.
          </h2>
          <div className="w-full flex 1075:flex-row flex-col">
            <div className="1075:w-full w-[65%] pr-[45px]">
              <Image src={ValuePropImage} />
            </div>
            <div className="w-full 1075:w-[35%] max-w-[600px] ">
              <div className="cardsWrap">
                <div className="iconWrap">
                  <BiLandscape />
                </div>
                <h3 className="servicesHeading text-white">
                  Web Design & Development
                </h3>
                <p className="sectionParagraph text-white">
                  Your website is the primary tool to convert curious visitors
                  into potential clients. We&apos;ll build a modern
                  mobile-friendly website, professionally designed and developed
                  by our experts.
                </p>
              </div>
              <div className="cardsWrap">
                <div className="iconWrap">
                  <BiVolumeFull />
                </div>
                <h3 className="servicesHeading text-white">
                  Small Business Marketing
                </h3>
                <p className="sectionParagraph text-white">
                  We’ll analyze your current digital presence and provide proven
                  digital marketing strategies to help your small business grow,
                  while using your budget with maximum efficiency.
                </p>
              </div>
              <div className="cardsWrap border-none">
                <div className="iconWrap">
                  <BiWrench />
                </div>
                <h3 className="servicesHeading text-white">
                  Search Engine Optimization
                </h3>
                <p className="sectionParagraph text-white">
                  For potential customers to find your website, strong SEO
                  (Search Engine Optimization) is necessary to earn top
                  positions. Our SEO services will help attract targeted and
                  qualified prospects to your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex flex-col items-center justify-center">
        <h2 className="sectionHeading text-center max-w-[628px] ml-auto mb-[45px]">
          Here is something about our process and how great we are!
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
                briefly analyze your current digital marketing infrastructure
                and create unique benchmarks to measure your success from.
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
                Planning is critical in order to achieve goals and allows for
                more efficient use of time and other resources. During the
                planning phase, we collaborate with the client and experts from
                various different backgrounds to develop an actionable strategy.
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
                on the progress of your project. Our experienced staff will
                ensure the project is successful. We&apos;ll continue to strive
                for improvements until the client is fully satisfied with our
                work.
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
    </>
  );
};

export default Services;
