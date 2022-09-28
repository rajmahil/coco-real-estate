import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import servicesMainImage from "../../public/Images/servicesMainImage.png";
import servicesMainImage2 from "../../public/Images/servicesMainImage2.png";
import ValuePropImage from "../../public/Images/ValuePropImage.png";
import WebsiteDesignAndDevelopment from "../../public/Images/Website-design-and-development-saskatoon.png";
import SearchEngineOptimizationImage from "../../public/Images/search-engine-optimization-saskatoon.png";
import ConsultingImage from "../../public/Images/digital-marketing-consultations-saskatoon.png";
import { BiLandscape, BiVolumeFull, BiWrench } from "react-icons/bi";
import {
  FaLaptopCode,
  FaDatabase,
  FaMicrophone,
  FaWordpress,
  FaShopify,
  FaHome,
  FaPalette,
} from "react-icons/fa";
import Head from "next/head";
import ServicesComp from "../../components/custom/ServicesComp";

const ServicesPageNav = [
  {
    heading: "Web Design + Development",
    headingBlack: "Web Design +",
    headingRed: "Development",
    subHeading:
      "100% fully custom websites optimized to bring your new leads and elevate your company image.",
    icon: <FaLaptopCode />,
    mainImage: WebsiteDesignAndDevelopment,
    imageAlt: "Website Design and Development in Saskatoon, SK ",
    paragraph: (
      <div>
        At Coco Creative, we design and develop 100% fully custom websites
        tailored to represent your company values. Whether it's custom WordPress
        websites or Shopify eCommerce stores, no job is too complex! Over the
        years, we have developed websites for various industries such as real
        estate, mining technologies, politics, etc. Using our expertise and
        best-in-class tools, we will build an elegant mobile-friendly website
        that suits your business needs. <br /> <br />
        Our websites are designed to convert visitors into paying customers and
        leads. For success, communication is key. We believe in a results-based
        approach to ensure your website is effective. Before project kick-off,
        we will discuss the goals and objectives you aim to achieve. Based on
        our discussion, we will build a custom plan for your business. After the
        project is complete, we will never leave you in the dark. A
        representative is always one call away for any questions or concerns.
      </div>
    ),
    inverted: false,
    link: "/services/#webdesignanddevelopment",
    id: "webdesignanddevelopment",
  },
  {
    heading: "Search Engine Optimization (SEO)",
    headingBlack: "Search Engine",
    headingRed: "Optimization (SEO)",
    subHeading:
      "Best-in-class Search Engine Optimization services (SEO) to help your business become omnipresent.",
    icon: <FaDatabase />,
    mainImage: SearchEngineOptimizationImage,
    imageAlt: "Search Engine Optimization Company in Saskatoon, SK ",
    paragraph: (
      <div>
        How effective is your website if nobody can find it? Coco Creative is an
        industry-leader for{" "}
        <Link passHref href="/">
          <span className="underline cursor-pointer">
            local SEO services in Saskatoon
          </span>
        </Link>
        . Our Search Engine Optimization (SEO) experts will develop a strategy
        to get your website front and center in search engine rankings. Our
        proven strategies will improve your brand visibility and generate more
        traffic to put you ahead of the competition.
        <br /> <br />
        There are plenty of variables to consider when it comes to Seach Engine
        Optimization (SEO) for your business. From creating relevant content to
        on-site SEO protocols, we have you covered. SEO is constantly evolving.
        As search engine algorithms change, you need to develop new strategies
        to stay at the top. Our experts are proactive, keeping up to date on all
        updates to ensure your business is omnipresent.
      </div>
    ),
    inverted: true,
    link: "/services/#searchengineoptimization",
    id: "searchengineoptimization",
  },
  {
    heading: "Consulting",
    headingBlack: "Consulting",
    headingRed: "Services",
    subHeading:
      "Our experts will guide you through all aspects of your digital marketing and audit your current marketing collateral.",
    icon: <FaMicrophone />,
    mainImage: ConsultingImage,
    imageAlt: "Website Design and Development in Saskatoon, SK ",
    paragraph: (
      <div>
        Our consulting services are designed to point you in the right
        direction. Whether it is analyzing your current website or a deep-dive
        into your marketing initiatives, we offer guidance to help you succeed.
        We will assign a dedicated expert and develop a strategy based on your
        goals and objectives. Communication and responsiveness are crucial. Your
        dedicated expert is always a phone call or an email away, ready to
        serve.
      </div>
    ),
    inverted: false,
    link: "/services/#consulting",
    id: "consulting",
  },
];

const otherServices = [
  {
    serviceName: "Custom WordPress Websites",
    serviceSubheading:
      "Integer elementum eget sapien ac imperdiet. Vestibulum nec enim posuere, elementum tortor ut, consequat libero.",
    serviceIcon: <FaWordpress />,
    link: "/services/wordpress-web-development",
  },
  {
    serviceName: "Custom Shopify Stores",
    serviceSubheading:
      "Integer elementum eget sapien ac imperdiet. Vestibulum nec enim posuere, elementum tortor ut, consequat libero.",
    serviceIcon: <FaShopify />,
    link: "/services/custom-shopify-stores",
  },
  {
    serviceName: "Real Estate Web Design",
    serviceSubheading:
      "Integer elementum eget sapien ac imperdiet. Vestibulum nec enim posuere, elementum tortor ut, consequat libero.",
    serviceIcon: <FaHome />,
    link: "/services/real-estate-web-development",
  },
  {
    serviceName: "Social Media Marketing",
    serviceSubheading:
      "Integer elementum eget sapien ac imperdiet. Vestibulum nec enim posuere, elementum tortor ut, consequat libero.",
    serviceIcon: <FaPalette />,
    link: "/services/real-estate-web-development",
  },
];

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
        heading="Our"
        textSpan="Services"
        paragraph="Our professional digital services ensure more leads and clientele for your business."
      />

      <div className="flex flex-col items-center justify-center py-[45px] px-[6px] 500:py-[90px] 500:px-[45px]">
        <h2 className="sectionHeading ml-auto font-[600] text-[2em]">
          Core <span className="text-red ">Services</span>
        </h2>
        <div className="flex flex-wrap flex-row items-center justify-center">
          {ServicesPageNav.map((services) => (
            <ServicesComp
              icon={services.icon}
              heading={services.heading}
              subHeading={services.subHeading}
              link={services.link}
            />
          ))}
        </div>
      </div>
      {ServicesPageNav.map((comp, index) => (
        <div
          key={index}
          id={comp.id}
          className={`py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex  items-center justify-center  ${
            comp.inverted
              ? "1200:flex-row-reverse bg-white"
              : "1200:flex-row bg-lightGrey"
          }  w-full ${
            comp.inverted ? "flex-col bg-white" : "flex-col bg-lightGrey"
          }`}
        >
          <div
            className={`w-full 1200:w-[50%] flex ${
              comp.inverted ? "justify-start" : "1200:justify-end"
            }`}
          >
            <div className="relative w-[320px] h-[320px] 500:w-[400px] 500:h-[400px] 700:w-[600px] 700:h-[600px]">
              <Image src={comp.mainImage} alt={comp.imageAlt} layout="fill" />
            </div>
          </div>
          <div
            className={`w-full 1200:w-[50%] flex items-center mt-10 1200:mt-0 ${
              comp.inverted
                ? `1200:mr-[40px] 1200:justify-end`
                : "1200:ml-[40px] justify-start"
            } `}
          >
            <div className="max-w-[600px]">
              <h2 className="sectionHeading">
                {comp.headingBlack}{" "}
                <span className="text-red">{comp.headingRed}</span>
              </h2>
              <div className="sectionParagraph">{comp.paragraph}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col items-center justify-center py-[45px] px-[6px] 500:py-[90px] 500:px-[45px]">
        <h2 className="sectionHeading ml-auto font-[600] text-[2em]">
          Other <span className="text-red ">Services</span>
        </h2>
        <div className="flex flex-wrap flex-row items-center justify-center">
          {otherServices.map((services) => (
            <ServicesComp
              icon={services.serviceIcon}
              heading={services.serviceName}
              subHeading={services.serviceSubheading}
              link={services.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
