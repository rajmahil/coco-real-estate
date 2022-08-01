import ValueBgTwo from "../public/Images/ValueBgTwo.png";
import ValueBgOne from "../public/Images/ValueBgOne.png";
import Image from "next/image";
import ProjectsComponent from "./ProjectsComponent";

const FeaturedProject = ({ projects }) => {
  console.log(projects);
  return (
    <div className="py-[45px] px-[22px] 575:py-[90px] 575:px-[75px] bg-[#f8f8f8] relative z-0 ">
      <div className="absolute right-0 top-0 w-[250px] 1250:width-[350px] z-[-1] ">
        <Image src={ValueBgOne} />
      </div>
      <div className="absolute left-0 bottom-0 w-[250px] 1250:width-[350px] z-[-1] ">
        <Image src={ValueBgTwo} />
      </div>
      <div className="max-w-[1400px] ml-auto mr-auto">
        <div className="flex justify-start max-w-[600px]">
          <div className="sectionHeading text-left">
            We&apos;ve helped many business owners build effective websites.
            Here are some <span className="text-red">recent projects</span>.
          </div>
        </div>
        <div className="mt-[40px] flex flex-wrap justify-between">
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
