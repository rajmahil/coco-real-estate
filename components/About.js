import AboutBgPattern from "../public/Images/AboutBgPattern.png";
import SolutionImage from "../public/Images/custom-web-desing-saskatoon-coco-creative.png";
import YKTSImage from "../public/Images/Custom-Wordpress-and-Ecommerce-websites-Saskatoon.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaPalette,
  FaChartArea,
  FaDatabase,
  FaHandsHelping,
  FaBolt,
  FaSearchDollar,
} from "react-icons/fa";

const About = ({ isTwo }) => {
  return (
    <div className="w-auto 575:py-[90px] 575:px-[75px] py-[45px] px-[22px] ">
      <div
        className={`max-w-[1400px] relative ml-auto mr-auto flex flex-col 1150:flex-row flex-wrap`}
        style={{ flexDirection: `${isTwo ? "row-reverse" : "row"}` }}
      >
        {isTwo ? (
          <div className="absolute top-[-40px] right-[-70px] z-[-1] w-[300px] 650:w-[450px]">
            <Image src={AboutBgPattern} />
          </div>
        ) : (
          <div className="absolute top-[-40px] left-[-70px] 650:w-[450px] w-[300px]">
            <Image src={AboutBgPattern} />
          </div>
        )}
        <div className="w-full 1150:w-[55%] ">
          <div
            className={`w-auto ${!isTwo && `1150:pr-[45px]`} ${
              isTwo && `1150:pl-[45px]`
            }  p-0`}
          >
            {isTwo ? (
              <Image
                src={SolutionImage}
                alt="custom web design Saskatoon Coco Creative"
              />
            ) : (
              <Image
                src={YKTSImage}
                alt="Custom Wordpress and Ecommerce websites Saskatoon"
              />
            )}
          </div>
        </div>
        {isTwo ? (
          <div className="w-full 1150:w-[45%] flex items-center">
            <div className="max-w-[600px] mt-[20px] 1150:mt-0 ">
              <h2 className="sectionHeading">
                Why Choose <span className="text-red">Coco Creative</span> ?
              </h2>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaHandsHelping />
                  </div>
                </div>
                <div className="contentTextContainer">
                  <h3 className="containerHeading">
                    Strong Client Relationships
                  </h3>
                  <p className="sectionParagraph">
                    At Coco Creative, you are more than just another client. We
                    believe in a personalized approach to business. Our goal is
                    to build long-lasting relationships for years to come, Raj
                    and the team will ensure you are{" "}
                    <a
                      className="externalLink"
                      href="https://www.google.com/search?q=coco+creative+testimonials&client=firefox-b-d&sxsrf=ALiCzsbgxBucg_MUOCmqqHqyzryXAIQ3Cg%3A1653956776702&ei=qGCVYtCtKuO5uvQPraGKgA8&ved=0ahUKEwjQoZiRvYj4AhXjnI4IHa2QAvAQ4dUDCA0&uact=5&oq=coco+creative+testimonials&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToECAAQRzoECCMQJzoFCAAQkQI6EQguEIAEELEDEIMBEMcBEKMCOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgQIABBDOgUIABCABDoLCC4QxwEQrwEQkQI6BwgAELEDEEM6BAguEEM6BwguENQCEEM6CggAELEDEIMBEEM6CAgAEIAEELEDOgsILhCABBDHARCvAToICC4QgAQQsQM6CwguEIAEELEDEIMBOgoILhCxAxCDARBDOgoILhCxAxDUAhBDOg4IABCABBCxAxCDARDJAzoFCAAQkgM6BQguEIAEOgsILhCABBCxAxDUAjoFCAAQsQM6BAgAEAo6BwgAEIAEEAo6CAgAEB4QDRAFOgYIABAeEBY6CAgAEB4QFhAKOggIABCABBDJAzoECCEQFToHCCEQChCgAUoECEEYAEoECEYYAFDFA1j8MWDWMmgJcAJ4AIABjwGIAewekgEEMC4zMpgBAKABAcgBCMABAQ&sclient=gws-wiz#lrd=0x5304f7dbffb27f7b:0xfbf01319eafa5de6,1,,,"
                      target="_blank"
                    >
                      100% satisfied with our services.
                    </a>{" "}
                    Whether it&apos;s a minor website update or a fully-custom
                    eCommerce website, our excellent customer service is
                    consistent.
                  </p>
                </div>
              </div>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaBolt />
                  </div>
                </div>
                <div className="contentTextContainer">
                  <h3 className="containerHeading">
                    Exceptional Responsiveness
                  </h3>
                  <p className="sectionParagraph">
                    Coco Creative promises excellent communication and
                    authenticity, We will never leave you in the dark. Raj and
                    the team are easily accessible when needed. Our word is our
                    bond, we will ensure your needs are satisfied, and concerns
                    resolved. Our 24/7 support ensures you receive help when you
                    need it most.
                  </p>
                </div>
              </div>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaSearchDollar />
                  </div>
                </div>
                <div className="contentTextContainer">
                  <h3 className="containerHeading">
                    High Quality, Affordable Pricing
                  </h3>
                  <p className="sectionParagraph">
                    When it comes to effective modern web design, We realize not
                    every business has hundreds and thousands of dollars to
                    spend. Our affordable web design plans ensure you receive
                    the necessary services without breaking the bank. Whether
                    you are a public company or a local shop, We will work
                    together to bring your ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full 1150:w-[45%] flex items-center">
            <div className="max-w-[600px] 1150:mt-0 mt-[20px]">
              <div className="sectionHeading">
                Websites that <span className="text-red">drive results</span>.
              </div>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaPalette />
                  </div>
                </div>
                <div className="contentTextContainer ">
                  <h3 className="containerHeading">
                    Fully-Customized & Mobile-friendly
                  </h3>
                  <p className="sectionParagraph">
                    Your website should be as unique as your business. Working
                    with our custom website design experts, We will develop a
                    website that represents and communicates the value of your
                    business. Whether it is a{" "}
                    <a
                      className="externalLink"
                      href="https://wordpress.com/themes"
                      target="_blank"
                    >
                      {" "}
                      custom WordPress theme
                    </a>
                    or an eCommerce website design, Coco Creative will build a
                    fully-customized, mobile-friendly website that elevates your
                    business.
                  </p>
                </div>
              </div>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaChartArea />
                  </div>
                </div>
                <div className="contentTextContainer ">
                  <h3 className="containerHeading">Industry-Leading SEO</h3>
                  <p className="sectionParagraph">
                    Already have an optimized website but not getting enough
                    traffic? Our{" "}
                    <Link href="/services" passhref>
                      <span className="externalLink">
                        Search Engine Optimization (SEO){" "}
                      </span>
                    </Link>
                    experts have helped many local Saskatoon businesses achieve
                    top rankings on Google. Coco Creative&apos;s SEO packages
                    are affordable and effective, helping your business shine
                    amongst the noise.
                  </p>
                </div>
              </div>
              <div className="contentContainer">
                <div className="aboutColWrap">
                  <div className="aboutIconWrap">
                    <FaDatabase />
                  </div>
                </div>
                <div className="contentTextContainer ">
                  <h3 className="containerHeading">
                    Reliable Web Hosting & Support
                  </h3>
                  <p className="sectionParagraph">
                    We offer{" "}
                    <Link href="/services" passHref>
                      <span className="externalLink">
                        top-notch hosting services{" "}
                      </span>
                    </Link>
                    and support to keep your website running efficiently. From
                    domain registration to Wordpress hosting services, Coco
                    Creative is your one-stop-shop for reliable hosting services
                    in Saskatoon. Our flexible hosting and support plans offer
                    the necessary support to take your business to the next
                    level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
