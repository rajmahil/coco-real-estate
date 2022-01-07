import styled from "styled-components";

export const RedTextSpan = styled.span`
  color: #ce202f;
`;

export const Paragraph = styled.p`
  color: #747474;
  line-height: 26px;
  font-size: 1.1em;

  @media screen and (max-width: 630px) {
    font-size: 1em;
  }
`;

export const ParaTextSpan = styled.span`
  font-weight: bold;
  color: #000;
`;

export const GlobalButton = styled.div`
  width: fit-content;
  padding: 16px 25px;
  background: #ce202f;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-size: 1.1em;
  white-space: nowrap;
  font-weight: 500;

  &:hover {
    background: #000;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 2.4em;
  line-height: 50px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 0px;
  margin-top: 0px;

  @media screen and (max-width: 630px) {
    font-size: 2em;
    line-height: 40px;
  }
`;

export const SecGlobalButton = styled.div`
  width: fit-content;
  padding: 16px 25px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-size: 1.1em;
  white-space: nowrap;
  font-weight: 500;
  border: 3px #fff solid;

  &:hover {
    background: #000;
    border: 3px #000 solid;
  }

  @media screen and (max-width: 500px) {
    font-size: 1em;
    padding: 12px 16px;
  }
`;
