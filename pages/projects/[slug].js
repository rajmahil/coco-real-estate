import React from "react";
import ProjectHeader from "../../components/ProjectHeader";
import styled from "styled-components";
import { Paragraph } from "../../styles/global";
import MarkdownIt from "markdown-it";
import MainCallToAction from "../../components/MainCallToAction";
import ViewAllProjects from "../../components/custom/ViewAllProjects";

const PageWrap = styled.div`
  padding: 90px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 630px) {
    padding: 45px 20px;
  }
`;

const LongDescription = styled.p`
  color: #747474;
  line-height: 26px;
  font-size: 1em;
  font-weight: 300;
  max-width: 1000px;
  text-align: center;

  @media screen and (max-width: 630px) {
    font-size: 1em;
  }
`;

const PhotoWrap = styled.div`
  width: auto;
  margin-top: 45px;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 48%;
  margin: 10px;

  @media screen and (max-width: 1090px) {
    width: 70%;
  }

  @media screen and (max-width: 575px) {
    width: 95%;
  }
`;

const ProjectDetails = ({ project }) => {
  const md = new MarkdownIt({
    html: true,
  });

  console.log(project);
  return (
    <>
      <ProjectHeader
        heading={project?.title}
        tags={project?.project_tags}
        projectLink={project?.projectLink}
      />
      <PageWrap>
        <LongDescription>{project?.projectLongDescription}</LongDescription>
        <PhotoWrap>
          {project &&
            project?.projectImages?.map((image) => (
              <ProjectImage src={image?.url} key={image?.id} />
            ))}
        </PhotoWrap>
        <ViewAllProjects />
      </PageWrap>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://floating-hollows-19339.herokuapp.com/projects/"
  );
  const projects = await res.json();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

//gets data for individual pages

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://floating-hollows-19339.herokuapp.com/projects?slug=${slug}`
  );
  const data = await res.json();
  const project = data[0];

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetails;
