import React, { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import ViewAllProjects from "../../components/custom/ViewAllProjects";
import Head from "next/head";
import Image from "next/image";
import ViewProjectBtn from "../../components/custom/ViewProjectBtn";
import { useRouter } from "next/router";

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
      <div className="flex flex-col items-center justify-center max-w-[1290px] ml-auto mr-auto 630:pt-[150px] 630:pr-[45px] 630:pb-[90px] 630:pl-[45px] pt-[100px] pr-[20px] pb-[45px] pl-[20px]">
        <div className="flex items-start justify-center w-full 1050:flex-row flex-col">
          <div className="1250:w-[70%] 1050:w-[65%] w-full 1050:pr-0 pr-0">
            <div className="relative left-0 1050:left-[-20px] w-full h-[270px] 500:h-[300px] 600:h-[400px] 850:h-[500px] mb-0 1250:mb-[40px]">
              <Image
                src={project?.projectImage?.url}
                alt={project?.projectImage?.alternativeText}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="pl-0 1250:pl-[20px]  w-auto 1050:w-[35%] 1250:w-[30%]">
            <div className="w-auto 1250:pb-[40px] pb-[20px]">
              <div className="text-[1.2em] 1250:text-[1.4em] font-bold uppercase">
                Client
              </div>
              <h3 className="text-red 1250:text-[1.8em] text-[1.6em] m-0 mt-[5px] 1250:mt-[10px] leading-[40px] font-bold">
                {project?.title}
              </h3>
            </div>
            <div className="w-auto 1250:pb-[40px] pb-[20px]">
              <div className="text-[1.2em] 1250:text-[1.4em] font-bold uppercase">
                Completion Date
              </div>
              <h3 className="text-red 1250:text-[1.8em] text-[1.6em] m-0 mt-[5px] 1250:mt-[10px] leading-[40px] font-bold">
                {project?.datePublished}
              </h3>
            </div>
            <div className="w-auto 1250:pb-[40px] pb-[20px]">
              <div className="text-[1.2em] 1250:text-[1.4em] font-bold uppercase">
                Services
              </div>
              <div className="w-auto flex flex-wrap mb-[20px] mt-[10px]">
                {project?.project_tags?.map((tag) => (
                  <div
                    className="bg-white border-[2px] border-red py-[5px] px-[10px] mr-[5px] mb-[5px] rounded-[100px]"
                    key={tag.id}
                  >
                    {" "}
                    {tag.projectTag}{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-auto 1250:pb-[40px] pb-[20px]">
              <ViewProjectBtn
                href={project.projectLink}
                blank={true}
                text="View website"
              />
            </div>
          </div>
        </div>
        <div className="w-full text-left flex flex-col items-start justify-start pt-[45px]">
          <h1 className="text-[2em] mb-0 1050:block hidden">
            {project?.title}
          </h1>
          <p
            className="sectionParagraph leading-[35px]"
            dangerouslySetInnerHTML={{
              __html: md.render(project.projectLongDescription),
            }}
          />
          <div className="w-full flex flex-wrap items-center justify-center">
            {project?.projectImages.map((image) => (
              <div
                className="w-[275px] h-[275px] relative m-[10px] 1300:h-[550px] 1300:w-[48%] 1250:h-[550px] 1250:w-[550px] 1050:w-[450px] 1050:h-[450px] 450:w-[400px] 450:h-[400px] 390:w-[325px] 390:h-[325px] "
                key={image?.id}
              >
                <Image
                  src={image?.url}
                  alt={image?.alternativeText}
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
        <ViewAllProjects />
      </div>
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

export default ProjectDetails;
