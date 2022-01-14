import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const SecButtonContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const SecButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonTextWrap = styled.div`
  font-family: gopher, sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  color: ${({ isWhite }) => (isWhite ? "#fff" : "#000")};
  text-decoration: none !important;
  border: none;
  padding: 12px 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.5s ease-out;
  }
`;
const SecButtonLine = styled.div`
  width: ${({ Hover }) => (Hover ? "100%" : "60%")};
  height: 2px;
  transition: all 0.3s ease-out;
  background-color: ${({ isWhite }) => (isWhite ? "#fff" : "#000")};
`;
const IconWrap = styled.div`
  margin-left: ${({ Hover }) => (Hover ? "5px" : "0px")};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
  color: ${({ isWhite }) => (isWhite ? "#fff" : "#000")};
`;

const SectionButton = ({ innerHTML, Href, isWhite }) => {
  const [secButtonHover, setSecButtonHover] = useState(false);
  return (
    <a
      href={Href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none !important" }}
    >
      <SecButtonContainer
        onMouseEnter={() => setSecButtonHover(true)}
        onMouseLeave={() => setSecButtonHover(false)}
      >
        <SecButtonWrap>
          <ButtonTextWrap isWhite={isWhite}>{innerHTML}</ButtonTextWrap>
          <IconWrap Hover={secButtonHover} isWhite={isWhite}>
            <HiOutlineArrowNarrowRight style={{ marginLeft: "8px" }} />
          </IconWrap>
        </SecButtonWrap>
        <SecButtonLine Hover={secButtonHover} isWhite={isWhite} />
      </SecButtonContainer>
    </a>
  );
};

export default SectionButton;
