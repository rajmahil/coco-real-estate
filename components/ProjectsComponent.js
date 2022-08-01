import React, { useState } from "react";
import Image from "next/image";
import ViewProjectBtn from "./custom/ViewProjectBtn";

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
    <div
      className="500:w-[90%] 1000:w-[46%] w-full  1000:h-auto h-[90%] 1000:mr-[20px] 1000:mb-[80px] mr-[0px] mb-[40px]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="p-0 1250:w-auto  w-full 1000:w-auto h-[260px] 450:h-[300px] 600:h-[350px] 800:h-[500px] 1000:h-[310px] 1250:h-[350px] 1420:h-[420px] p-auto "
        style={{
          webkitBoxAlign: "center",
          WebkitBoxPack: "center",
          display: "-webkit-box",
        }}
      >
        <div
          className="w-full hover:w-[90%] relative transition-all"
          style={{ height: "inherit" }}
        >
          <Image
            src={imageLink}
            alt={altImage}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-auto">
        <div className="text-[2em] mb-[5px] font-bold mt-[20px]">{heading}</div>
        <div className="sectionParagraph mb-[25px]">{subHeading}</div>
        <div className="w-auto flex  flex-wrap mb-[20px]">
          {tags?.map((tag) => (
            <div
              className="bg-white border-2 border-red py-[5px] px-[10px] mr-[5px] mb-[5px] rounded-[100px] "
              key={tag.id}
            >
              {tag.projectTag}
            </div>
          ))}
        </div>
        <ViewProjectBtn href={projectSlug} text="View Project" blank={false} />
      </div>
    </div>
  );
};

export default ProjectsComponent;
