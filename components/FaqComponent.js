import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { Paragraph } from "../styles/global";

const QuesWrap = styled.div`
  border: solid 2px #000;
  padding: 20px;
  overflow: hidden;
  transition: all 0.3s ease-in;
  margin: 20px 0px;
  cursor: pointer;
`;

const QuesText = styled.h3`
  font-size: 1.4em;
  margin: 0px;
  font-weight: 500;

  @media screen and (max-width: 650px) {
    font-size: 1.2em;
  }
`;

const QuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrap = styled.div`
  width: auto;
  font-size: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  -webkit-transform: rotate(${({ isOpen }) => (isOpen ? "0deg" : "-90deg")});
  color: ${({ isHover }) => (isHover ? "#ce202f" : "#000")};
`;

const QuesAnswer = styled.div`
  width: 100%;
  transition: all 0.3s ease-in;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  overflow: hidden;
`;

const FaqComponent = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <QuesWrap
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <QuesContainer>
        <QuesText>{question}</QuesText>
        <IconWrap isOpen={isOpen} isHover={isHover}>
          <FaAngleDown />
        </IconWrap>
      </QuesContainer>
      <QuesAnswer isOpen={isOpen}>
        <Paragraph style={{ marginBottom: "0px" }}>{answer}</Paragraph>
      </QuesAnswer>
    </QuesWrap>
  );
};

export default FaqComponent;
