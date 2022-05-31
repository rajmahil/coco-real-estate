import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "../styles/global";
import ViewProjectBtn from "./custom/ViewProjectBtn";

const ProjectWrap = styled.div`
  width: 46%;
  height: auto;
  margin: 0px 20px 80px 0px;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0px 0px 40px 0px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;
const TextWrap = styled.div`
  width: auto;
`;
const ProjectHeading = styled.h3`
  font-size: 2em;
  margin-bottom: 5px;

  @media screen and (max-width: 1250px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.6em;
  }
`;

const ImageZoom = styled.div`
  height: 420px;
  padding: auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: -webkit-box;

  @media screen and (max-width: 1420px) {
    height: 350px;
  }

  @media screen and (max-width: 1250px) {
    height: 310px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 500px;
    padding: 0px;
  }

  @media screen and (max-width: 800px) {
    height: 350px;
  }
  @media screen and (max-width: 600px) {
    height: 300px;
  }
  @media screen and (max-width: 450px) {
    height: 260px;
  }
`;

const ImageWrap = styled.div`
  width: ${({ isHover }) => (isHover ? "90%" : "100%")};
  position: relative;
  height: inherit;
  transition: all 0.2s ease-out;
`;
export const TagsWrap = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const ProjectTag = styled.div`
  background: #fff;
  border: 2px #ce202f solid;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 100px;
`;

const ProjectsComponent = ({
  imageLink,
  heading,
  subHeading,
  projectSlug,
  altImage,
  tags,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <ProjectWrap
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ImageZoom>
        <ImageWrap isHover={isHover}>
          <Image
            src={imageLink}
            alt={altImage}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrap>
      </ImageZoom>
      <TextWrap>
        <ProjectHeading>{heading}</ProjectHeading>
        <Paragraph>{subHeading}</Paragraph>
        <TagsWrap>
          {tags?.map((tag) => (
            <ProjectTag key={tag.id}>{tag.projectTag}</ProjectTag>
          ))}
        </TagsWrap>
        <ViewProjectBtn href={projectSlug} />
      </TextWrap>
    </ProjectWrap>
  );
};

export default ProjectsComponent;
