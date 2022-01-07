import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const ButtonWrap = styled.div`
  width: 340px; //170px
  padding: 10px 25px;
  background: ${({ isHover }) => (isHover ? "#000" : "#ce202f")};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;
`;
const ButtonWrap170 = styled.div`
  width: 170px;
  padding: 10px 25px;
  background: ${({ isHover }) => (isHover ? "#000" : "#ce202f")};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;
`;
const ButtonText = styled.p`
  font-size: 1.1em;
  line-height: 0px;
  white-space: nowrap;
  font-weight: 500;
`;
const IconWrap = styled.div`
  width: auto;
  line-height: 0px;
  font-size: 1.5em;
  position: relative;
  margin-left: ${({ isHover }) => (isHover ? "15px" : "5px")};
  transition: all 0.3s ease-out;
  font-weight: 500;
`;

const MainButton = ({ text, widthAuto }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {widthAuto ? (
        <ButtonWrap
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
          widthAuto={widthAuto}
        >
          <ButtonText>{text}</ButtonText>
          <IconWrap isHover={isHover}>
            <AiOutlineArrowRight />
          </IconWrap>
        </ButtonWrap>
      ) : (
        <ButtonWrap170
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          isHover={isHover}
          widthAuto={widthAuto}
        >
          <ButtonText>{text}</ButtonText>
          <IconWrap isHover={isHover}>
            <AiOutlineArrowRight />
          </IconWrap>
        </ButtonWrap170>
      )}
    </>
  );
};

export default MainButton;
