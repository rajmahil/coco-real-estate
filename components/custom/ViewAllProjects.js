import React, { useState } from "react";
import Link from "next/link";

const ViewAllProjects = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link passHref href="/projects">
      <div
        className="w-auto mt-[90px] uppercase text-[1.5em] 375:text-[1.8em] font-extrabold flex flex-col items-center cursor-pointer text-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        View All Projects{" "}
        <div
          className={`${
            isHover ? "w-full" : "w-[20%]"
          } h-[5px] bg-black mt-[5px] transition-all`}
        />
      </div>
    </Link>
  );
};

export default ViewAllProjects;
