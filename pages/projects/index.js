import React from "react";
import PageHeader from "../../components/PageHeader";
import ProjectsComponent from "../../components/ProjectsComponent";
import styled from "styled-components";
import { ProjectsWrap } from "../../components/FeaturedProject";
import Head from "next/head";

const PageWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 90px 26px;
`;

const ProjectPage = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Our Portfolio | Coco Creative Saskatoon </title>
        <meta
          name="description"
          content="Coco Creative is the premier choice for web development in Saskatoon, Saskatchewan. Over the past decade, We have helped local businesses build eCommerce websites, custom WordPress websites, Search Engine Optimization (SEO) services, Web hosting, and much more!"
        />
        <meta
          property="og:title"
          content="Our Portfolio | Coco Creative Saskatoon"
        />
        <meta
          property="og:description"
          content="Coco Creative is the premier choice for web development in Saskatoon, Saskatchewan. Over the past decade, We have help local businesses build eCommerce websites, custom WordPress websites, Search Engine Optimization (SEO) services, Web hosting, and much more!
          "
        />
        <link rel="canonical" href="https://cococreativeweb.com/projects/" />
      </Head>
      <PageHeader
        heading="Our"
        textSpan="Portfolio"
        paragraph="Here is a look into our latest projects!"
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
