import styled from "styled-components";
import ValueBgTwo from "../public/Images/ValueBgTwo.png";
import ValueBgOne from "../public/Images/ValueBgOne.png";
import {
  Paragraph,
  ParaTextSpan,
  RedTextSpan,
  SectionHeading,
} from "../styles/global";
import Image from "next/image";
import ProjectsComponent from "./ProjectsComponent";

export const FeaturedContainer = styled.div`
  padding: 90px 75px;
  background: #f8f8f8;
  position: relative;
  z-index: 0;
  /* background-image: url(${ValueBgOne.src}), url(${ValueBgTwo.src});
  background-position: 100% 0%, 9% 94%;
  background-size: 290px, 350px;
  background-repeat: no-repeat, no-repeat;

  @media screen and (max-width: 1000px) {
    background-size: 200px, 300px;
  } */
  @media screen and (max-width: 575px) {
    padding: 45px 22px;
  }
`;
const FeaturedWrap = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;
const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 600px;
`;

export const ProjectsWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BgImageWrap = styled.div`
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;
  z-index: -1;

  @media screen and (max-width: 1250px) {
    width: 250px;
  }

  @media screen and (max-width: 575px) {
    width: 200px;
  }
`;

const BgImageWrapTwo = styled.div`
  width: auto;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 350px;

  @media screen and (max-width: 1250px) {
    width: 250px;
  }
  @media screen and (max-width: 575px) {
    width: 200px;
  }
`;

const FeaturedProject = ({ projects }) => {
  console.log(projects);
  return (
    <FeaturedContainer>
      <BgImageWrap>
        <Image src={ValueBgOne} />
      </BgImageWrap>
      <BgImageWrapTwo>
        <Image src={ValueBgTwo} />
      </BgImageWrapTwo>
      <FeaturedWrap>
        <TextWrap>
          <SectionHeading style={{ textAlign: "left" }}>
            We&apos;ve helped many business owners build effective websites.
            Here are some <RedTextSpan>recent projects</RedTextSpan>.
          </SectionHeading>
        </TextWrap>
        <ProjectsWrap>
          {projects.map(
            (project) =>
              project.featuredProject && (
                <ProjectsComponent
                  key={project.id}
                  imageLink={project.projectImage.url}
                  heading={project.title}
                  subHeading={project.projectShortDescription}
                  projectSlug={`/projects/${project.slug}`}
                  altImage={project.projectImage.alternativeText}
                  tags={project.project_tags}
                />
              )
          )}
        </ProjectsWrap>
      </FeaturedWrap>
    </FeaturedContainer>
  );
};

export default FeaturedProject;
