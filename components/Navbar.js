import Image from "next/image";
import CocoCreativeMainLogo from "../public/Images/Coco-Creative-Web-Custom-Web-Design-Saskatoon.png";
import { useState, useEffect } from "react";
import MainButton from "./custom/MainButton";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

const MenuVariants = {
  open: { y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  closed: {
    y: -180,
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
  exit: {
    y: -180,
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const MobileMenuVariants = {
  open: { y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  closed: {
    y: "-80vh",
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
  exit: {
    y: "-80vh",
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const Navbar = ({ isOpen, toggle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
              isMenuOpen ? "top-0" : "top-[-180px]"
            } z-[20] 750:h-[180px] h-[80vh] border-b-[3px] border-black flex items-end 750:p-0 pt-[150px] pb-[25px] `}
            isMenuOpen={isMenuOpen}
            variants={
              windowDimensions > 750 ? MenuVariants : MobileMenuVariants
            }
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="exit"
          >
            <div className="flex 750:flex-row flex-col items-center justify-between ml-auto mr-auto w-full max-w-[1400px] py-0 px-[20px] 750:h-auto h-full ">
              <Link passHref href="/about">
                <div className="menuItem" onClick={menuToggle}>
                  About
                </div>
              </Link>
              <Link passHref href="/services">
                <div className="menuItem" onClick={menuToggle}>
                  Services
                </div>
              </Link>
              <Link passHref href="/projects">
                <div className="menuItem" onClick={menuToggle}>
                  Portfolio
                </div>
              </Link>
              <Link passHref href="/contact">
                <div className="menuItem" onClick={menuToggle}>
                  Contact Us
                </div>
              </Link>
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
                Menu
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
