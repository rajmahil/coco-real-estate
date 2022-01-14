import styled from "styled-components";
import Image from "next/image";
import CocoCreativeMainLogo from "../public/Images/CocoCreativeMainLogo.png";
import { useState, useEffect } from "react";
import MainButton from "./custom/MainButton";
import Link from "next/link";

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
  width: auto;
`;

const Navbar = ({ isOpen, toggle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(0);

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
    <NavbarContainer scrollPosition={scrollPosition}>
      <NavbarWrap>
        <Link href="/" passhref>
          <div style={{ cursor: "pointer" }}>
            {scrollPosition < 100 ? (
              <Image src={CocoCreativeMainLogo} width={222} height={74.37} />
            ) : (
              <Image src={CocoCreativeMainLogo} width={177.6} height={59.5} />
            )}
          </div>
        </Link>
        <NavLinksWrap>
          <div onClick={toggle}>
            <MainButton
              text={
                windowDimensions > 700
                  ? `Book a Strategy Call - It's Free`
                  : `Contact Us`
              }
              widthAuto={windowDimensions > 700 ? true : false}
            />
          </div>
        </NavLinksWrap>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
