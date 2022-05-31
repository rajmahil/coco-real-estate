import React from "react";
import PageHeader from "../../components/PageHeader";
import ProjectsComponent from "../../components/ProjectsComponent";
import styled from "styled-components";
import { ProjectsWrap } from "../../components/FeaturedProject";

const PageWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 90px 26px;
`;

const ProjectPage = ({ projects }) => {
  return (
    <>
      <PageHeader
        heading="We've helped many business owners build effective websites"
        textSpan="Here are some of our latest projects"
      />
      <PageWrap>
        <ProjectsWrap>
          {projects.map((project) => (
            <ProjectsComponent
              key={project.id}
              imageLink={project.projectImage.url}
              heading={project.title}
              subHeading={project.projectShortDescription}
              projectSlug={`/projects/${project.slug}`}
              altImage={project.projectImage.alternativeText}
              tags={project.project_tags}
            />
          ))}
        </ProjectsWrap>
      </PageWrap>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://floating-hollows-19339.herokuapp.com/projects`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

export default ProjectPage;
