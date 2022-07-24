import React, { useState, useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import styled from "styled-components";
import { Paragraph } from "../../styles/global";
import MarkdownIt from "markdown-it";
import MainCallToAction from "../../components/MainCallToAction";
import ViewAllProjects from "../../components/custom/ViewAllProjects";
import Head from "next/head";
import Image from "next/image";
import { ProjectTag, TagsWrap } from "../../components/ProjectsComponent";
import ViewProjectBtn from "../../components/custom/ViewProjectBtn";
import { useRouter } from "next/router";

const PageWrap = styled.article`
  padding: 150px 45px 90px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1290px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 630px) {
    padding: 100px 20px 45px 20px;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

const PhotoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProjectImageWrap = styled.div`
  position: relative;
  width: 48%;
  height: 550px;
  margin: 10px;

  @media screen and (max-width: 1300px) {
    width: 550px;
    height: 550px;
  }

  @media screen and (max-width: 1250px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 1050px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 550px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 325px;
    height: 325px;
  }

  @media screen and (max-width: 390px) {
    width: 275px;
    height: 275px;
  }
`;

const ColImage = styled.div`
  width: 70%;

  @media screen and (max-width: 1250px) {
    width: 65%;
  }
  @media screen and (max-width: 1050px) {
    width: 100%;
    padding-right: auto;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  left: -20px;
  width: 100%;
  height: 500px;

  @media screen and (max-width: 1250px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1050px) {
    left: 0;
  }
  @media screen and (max-width: 850px) {
    height: 400px;
  }
  @media screen and (max-width: 600px) {
    height: 300px;
  }

  @media screen and (max-width: 500px) {
    height: 270px;
  }
`;

const ColInfo = styled.div`
  width: 30%;
  padding-left: 20px;

  @media screen and (max-width: 1250px) {
    width: 35%;
  }

  @media screen and (max-width: 1050px) {
    width: auto;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0px;
  }
`;
const ProjectInfoWrap = styled.div`
  width: auto;
  padding: 0px 0px 40px 0px;

  @media screen and (max-width: 1250px) {
    padding: 0px 0px 20px 0px;
  }
`;

const InfoHeading = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 1250px) {
    font-size: 1.2em;
  }
`;

const InfoText = styled.h3`
  color: #cc212f;
  font-size: 1.8em;
  margin: 0px;
  margin-top: 10px;
  line-height: 40px;
  font-weight: 700;
  @media screen and (max-width: 1250px) {
    font-size: 1.6em;
    margin-top: 5px;
  }
`;

const PageContentWrap = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 45px;
`;

const PageHeading = styled.h1`
  font-size: 2em;
  margin-bottom: 0px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const ProjectDetails = ({ projects }) => {
  const router = useRouter();
  const md = new MarkdownIt({
    html: true,
  });
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const project = projects[0];

  console.log(project);
  return (
    <>
      <Head>
        <title>{project.titleTag}</title>
        <meta name="description" content={project.metaDescription} />
        <meta property="og:title" content={project.titleTag} />
        <meta property="og:description" content={project.metaDescription} />
        <link
          rel="canonical"
          href={`https://cococreativeweb.com/projects/${project.slug}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <PageWrap>
        <HeaderWrap>
          <ColImage>
            <ImageWrap>
              <Image
                src={project?.projectImage?.url}
                alt={project?.projectImage?.alternativeText}
                layout="fill"
                objectFit="contain"
              />
            </ImageWrap>
          </ColImage>
          <ColInfo>
            <ProjectInfoWrap>
              <InfoHeading>Client</InfoHeading>
              <InfoText>{project?.title}</InfoText>
            </ProjectInfoWrap>
            <ProjectInfoWrap>
              <InfoHeading>Completion Date</InfoHeading>
              <InfoText>{project?.datePublished}</InfoText>
            </ProjectInfoWrap>
            <ProjectInfoWrap>
              <InfoHeading>Services</InfoHeading>
              <TagsWrap style={{ marginTop: "10px" }}>
                {project?.project_tags?.map((tag) => (
                  <ProjectTag key={tag.id}> {tag.projectTag} </ProjectTag>
                ))}
              </TagsWrap>
            </ProjectInfoWrap>
            <ProjectInfoWrap>
              <ViewProjectBtn
                href={project.projectLink}
                blank={true}
                text="View website"
              />
            </ProjectInfoWrap>
          </ColInfo>
        </HeaderWrap>
        <PageContentWrap>
          <PageHeading>{project?.title}</PageHeading>
          <Paragraph
            style={{ lineHeight: "35px" }}
            dangerouslySetInnerHTML={{
              __html: md.render(project.projectLongDescription),
            }}
          />
          <PhotoWrap>
            {project?.projectImages.map((image) => (
              <ProjectImageWrap key={image?.id}>
                <Image
                  src={image?.url}
                  alt={image?.alternativeText}
                  layout="fill"
                />
              </ProjectImageWrap>
            ))}
          </PhotoWrap>
        </PageContentWrap>
        <ViewAllProjects />
      </PageWrap>
    </>
  );
};
export const getStaticPaths = async () => {
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
};

//gets data for individual pages

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(
    `https://floating-hollows-19339.herokuapp.com/projects?slug=${slug}`
  );
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

// export async function getServerSideProps({ params }) {
//   const res = await fetch(
//     `https://floating-hollows-19339.herokuapp.com/projects?slug=${params.slug}`
//   );
//   const projects = await res.json();

//   return {
//     props: {
//       projects,
//     },
//   };
// }

export default ProjectDetails;
