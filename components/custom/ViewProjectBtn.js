import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ButtonText = styled.div`
  font-size: 1.4em;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 1.2em;
  }
`;

const ButtonWrap = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrap = styled.div`
  font-size: 1.8em;
  display: flex;
  align-items: center;
  margin-left: ${({ isHover }) => (isHover ? "15px" : "5px")};
  transition: all 0.2s ease-out;
`;

const ViewProjectBtn = ({ href, text, blank }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {blank ? (
        <a
          style={{ color: "#000", textDecoration: "none" }}
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          <ButtonWrap
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <ButtonText>{text}</ButtonText>
            <IconWrap isHover={isHover}>
              <FiArrowRight />
            </IconWrap>
          </ButtonWrap>
        </a>
      ) : (
        <Link passHref href={href}>
          <ButtonWrap
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <ButtonText>{text}</ButtonText>
            <IconWrap isHover={isHover}>
              <FiArrowRight />
            </IconWrap>
          </ButtonWrap>
        </Link>
      )}
    </>
  );
};

export default ViewProjectBtn;
