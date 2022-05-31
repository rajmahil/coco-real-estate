import React from "react";
import styled from "styled-components";
import { SectionHeading, GlobalButton } from "../styles/global";
import { ProjectTag, TagsWrap } from "./ProjectsComponent";

const PageHeaderWrap = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05)
    ),
    url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f302910ffa3e99ef81f1d_Pattern%201.png"),
    url("https://uploads-ssl.webflow.com/608af2c451dd256c69196f29/609f2f781e663afdaed5f1aa_ezgif.com-gif-maker.png");
  background-position: 0px 0px, 0px 0px, 0px 0px;
  background-size: auto, 344px, auto;
  background-repeat: repeat, repeat, repeat;
  height: 450px;
  padding-top: 90px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 630px) {
    padding: 0px 16px;
  }
`;

const ProjectHeader = ({ heading, tags, projectLink }) => {
  console.log(tags);
  return (
    <PageHeaderWrap>
      <ContentWrap>
        <SectionHeading
          style={{
            marginBottom: "10px",
            textAlign: "center",
            marginLeft: "auto",
          }}
        >
          {heading}
        </SectionHeading>
        <TagsWrap style={{ alignItems: "center", justifyContent: "center" }}>
          {tags.map((tag) => (
            <ProjectTag>{tag.projectTag}</ProjectTag>
          ))}
        </TagsWrap>
        <a passHref href={projectLink} target="_blank">
          <GlobalButton>View Website</GlobalButton>
        </a>
      </ContentWrap>
    </PageHeaderWrap>
  );
};

export default ProjectHeader;
