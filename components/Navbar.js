import styled from "styled-components";
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

const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 1000000;
  background: ${({ scrollPosition }) =>
    scrollPosition > 100 ? "rgba(255, 255, 255, 0.8)" : "none"};
  transition: all 0.3s ease-out;
  padding: 14px;
`;
const NavbarWrap = styled.div`
  width: auto;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLinksWrap = styled.div`
  display: flex;
  width: auto;
`;
const MenuButton = styled.div`
  width: fit-content;
  padding: 16px 25px;
  background: ${({ isMenuOpen }) => (isMenuOpen ? "#000" : "#fff")};
  color: ${({ isMenuOpen }) => (isMenuOpen ? "#fff" : "#000")};
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-size: 1.1em;
  white-space: nowrap;
  font-weight: 500;
  margin-right: 15px;

  &:hover {
    color: ${({ isMenuOpen }) => (isMenuOpen ? "#fff" : "#ce202f")};
  }
`;
const MenuTopBar = styled.nav`
  width: 100%;
  background: #fff;
  position: fixed;
  top: ${({ isMenuOpen }) => (isMenuOpen ? "0px" : "-180px")};
  z-index: 20;
  height: 180px;
  border-bottom: 3px #000 solid;
  transition: all 0.3 ease-in;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 750px) {
    height: 80vh;
    padding-top: 150px;
    padding-bottom: 25px;
  }
`;
const MobileMenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
  padding: 0px 20px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 100%;
  }
`;
const MenuItem = styled.div`
  padding: 22px 5px;
  font-size: 1.2em;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #ce202f;
  }
`;

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
          <MenuTopBar
            isMenuOpen={isMenuOpen}
            as={motion.div}
            variants={
              windowDimensions > 750 ? MenuVariants : MobileMenuVariants
            }
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="exit"
          >
            <MobileMenuWrap>
              <Link passHref href="/about">
                <MenuItem>About</MenuItem>
              </Link>
              <Link passHref href="/services">
                <MenuItem>Services</MenuItem>
              </Link>
              <Link passHref href="/projects">
                <MenuItem>Portfolio</MenuItem>
              </Link>
              <Link passHref href="/contact">
                <MenuItem>Contact Us</MenuItem>
              </Link>
            </MobileMenuWrap>
          </MenuTopBar>
        )}
      </AnimatePresence>

      <NavbarContainer scrollPosition={scrollPosition}>
        <NavbarWrap>
          <Link href="/" passhref>
            <div style={{ cursor: "pointer" }}>
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
          <NavLinksWrap>
            <div onClick={menuToggle}>
              <MenuButton isMenuOpen={isMenuOpen}>Menu</MenuButton>
            </div>
            <div onClick={toggle}>
              {windowDimensions > 750 && <MainButton text="Get A Quote" />}
            </div>
          </NavLinksWrap>
        </NavbarWrap>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
