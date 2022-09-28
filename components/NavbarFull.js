import Image from "next/image";
import CocoCreativeMainLogo from "../public/Images/Coco-Creative-Web-Custom-Web-Design-Saskatoon.png";
import { useState, useEffect } from "react";
import MainButton from "./custom/MainButton";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight, AiFillMessage } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FaPuzzlePiece } from "react-icons/fa";
import AboutMenuImages from "../public/Images/AboutMenuImages.png";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

const MenuVariants = {
  open: { y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  closed: {
    y: "-100vh",
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const MobileMenuVariants = {
  open: { y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  closed: {
    y: "-100vh",
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const Navbar = ({ isOpen, toggle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAboutOptions, setShowAboutOptions] = useState(false);
  const [showServicesOptions, setShowServicesOptions] = useState(false);
  const [showPortfolioOptions, setShowPortfolioOptions] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const showMenuOptions = (key) => {
    switch (key) {
      case "about":
        setShowAboutOptions(true);
        setShowServicesOptions(false);
        setShowPortfolioOptions(false);
        break;
      case "services":
        setShowAboutOptions(false);
        setShowServicesOptions(true);
        setShowPortfolioOptions(false);
        break;

      case "portfolio":
        setShowAboutOptions(false);
        setShowServicesOptions(false);
        setShowPortfolioOptions(true);
      default:
      // code block
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setWindowDimensions(getWindowDimensions());

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isMenuOpen && (
          <motion.div
            className={`w-full bg-white fixed ${
              isMenuOpen ? "top-0" : "top-[-100vh]"
            } z-[20]  h-[100vh] b flex items-start  pb-[25px] `}
            isMenuOpen={isMenuOpen}
            variants={
              windowDimensions > 750 ? MenuVariants : MobileMenuVariants
            }
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="exit"
          >
            <div className="flex 750:flex-row flex-col items-center justify-between ml-auto mr-auto w-full py-0  750:h-auto h-full ">
              <div className="flex flex-col items-center justify-center w-[45%] h-screen border-b-[3px] border-black">
                <div className="navbarContainer ml-auto">
                  <div
                    className="group"
                    onMouseEnter={() => showMenuOptions("about")}
                  >
                    <Link passHref href="/about">
                      <span
                        className={`menuItem ${showAboutOptions && "text-red"}`}
                      >
                        <span
                          className={`w-[70px] ${
                            showAboutOptions && "text-red pl-[15px]"
                          }   transition-all`}
                        >
                          <AiOutlineArrowRight />
                        </span>
                        About
                      </span>
                    </Link>
                  </div>
                  <div
                    className="group"
                    onMouseEnter={() => showMenuOptions("services")}
                  >
                    <Link passHref href="/about">
                      <span
                        className={`menuItem ${
                          showServicesOptions && "text-red"
                        }`}
                      >
                        <span
                          className={`w-[70px] ${
                            showServicesOptions && "opacity-100 pl-[15px]"
                          }  transition-all`}
                        >
                          <AiOutlineArrowRight />
                        </span>
                        Services
                      </span>
                    </Link>
                  </div>
                  <div
                    className="group"
                    onMouseEnter={() => showMenuOptions("portfolio")}
                  >
                    <Link passHref href="/about">
                      <span
                        className={`menuItem ${
                          showPortfolioOptions && "text-red"
                        }`}
                      >
                        <span
                          className={`w-[70px] ${
                            showPortfolioOptions && "opacity-100 pl-[15px]"
                          }  transition-all`}
                        >
                          <AiOutlineArrowRight />
                        </span>
                        Portfolio
                      </span>
                    </Link>
                  </div>
                  <div className="group">
                    <Link passHref href="/about">
                      <span className="menuItem">
                        <span className="arrowHover">
                          <AiOutlineArrowRight />
                        </span>
                        Blog
                      </span>
                    </Link>
                  </div>
                  <div className="group">
                    <Link passHref href="/about">
                      <span className="menuItem">
                        <span className="arrowHover">
                          <AiOutlineArrowRight />
                        </span>
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[55%] items-center justify-center h-screen bg-[#ececec] border-b-[3px] border-black">
                <div className="navbarContainer items-start mr-auto w-full p-5">
                  {showAboutOptions && (
                    <div className="menuOptions">
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <BsFillGearFill />
                        </div>
                        <div
                          className="group cursor-pointer"
                          onClick={menuToggle}
                        >
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Our Founder
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <FaPuzzlePiece />
                        </div>
                        <div className="group cursor-pointer">
                          <Link passHref href="/about">
                            <div className="flex flex-col" onClick={menuToggle}>
                              <span className="menuSubItem group-hover:text-red  transition-all">
                                Our Process
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <AiFillMessage />
                        </div>
                        <div className="group cursor-pointer">
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Testimonials
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {showServicesOptions && (
                    <div className="menuOptions">
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <AiFillMessage />
                        </div>
                        <div className="group cursor-pointer">
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Web Design + Development
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <AiFillMessage />
                        </div>
                        <div className="group cursor-pointer">
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Search Engine Optimization (SEO)
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <AiFillMessage />
                        </div>
                        <div className="group cursor-pointer">
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Consulting
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {showPortfolioOptions && (
                    <div className="menuOptions ">
                      <div className="menuSubWrap">
                        <div className="menuSubIcon">
                          <BsFillGearFill />
                        </div>
                        <div
                          className="group cursor-pointer"
                          onClick={menuToggle}
                        >
                          <Link passHref href="/about">
                            <div className="flex flex-col">
                              <span
                                className="menuSubItem group-hover:text-red transition-all"
                                onClick={menuToggle}
                              >
                                Our Founder
                              </span>
                              <p className="sectionParagraph mt-0">
                                Here&apos;s just a few of the companies and
                                organizations that trust ABC Media.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`w-full fixed z-[100000] ${
          scrollPosition > 100 ? "bg-[rgba(255,255,255,0.8)]" : "none"
        } transition-all p-[14px]`}
        scrollPosition={scrollPosition}
      >
        <div className="w-auto max-w-[1600px] ml-auto mr-auto flex items-center justify-between">
          <Link href="/" passhref>
            <div className="cursor-pointer">
              {scrollPosition < 100 ? (
                <Image
                  src={CocoCreativeMainLogo}
                  width={222}
                  height={74.37}
                  alt="Coco Creative Web-Custom - Web Design Saskatoon"
                />
              ) : (
                <Image
                  src={CocoCreativeMainLogo}
                  width={177.6}
                  height={59.5}
                  alt="Coco Creative Web-Custom - Web Design Saskatoon"
                />
              )}
            </div>
          </Link>
          <div className="flex w-auto">
            <div onClick={menuToggle}>
              <div
                className={`w-fit py-[16px] px-[25px] ${
                  isMenuOpen ? "bg-black" : "bg-white"
                } ${
                  isMenuOpen ? "text-white" : "text-black"
                } cursor-pointer transition-all text-[1.1em] whitespace-nowrap font-medium mr-[15px] hover:${
                  isMenuOpen ? "text-white" : "text-red"
                }`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </div>
            </div>
            <div onClick={toggle}>
              {windowDimensions > 750 && <MainButton text="Get A Quote" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
