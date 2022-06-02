import styled from "styled-components";

export const RedTextSpan = styled.span`
  color: #ce202f;
`;

export const Paragraph = styled.p`
  color: #4f4f4f;
  line-height: 26px;
  font-size: 1em;
  font-weight: 300;

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
  border: 3px #ce202f solid;

  &:hover {
    background: #000;
    border: 3px #000 solid;
  }

  @media screen and (max-width: 500px) {
    font-size: 1em;
    padding: 14px 22px;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 2.4em;
  line-height: 55px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-right: auto;

  @media screen and (max-width: 630px) {
    font-size: 2em;
    line-height: 40px;
  }
`;

export const SecGlobalButton = styled.div`
  width: fit-content;
  padding: 16px 25px;
  color: ${({ white }) => (white ? "#fff" : "#000")};
  transition: all 0.3s ease-out;
  font-size: 1.1em;
  white-space: nowrap;
  font-weight: 500;
  border: ${({ white }) => (white ? "3px #fff solid;" : "3px #000 solid;")}
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
    border: 3px #000 solid;
  }

  @media screen and (max-width: 500px) {
    margin-left: 5px;
    
  }

  @media screen and (max-width: 500px) {
    font-size: 1em;
    padding: 14px 22px;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: underline;
`;

export const InternalLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
