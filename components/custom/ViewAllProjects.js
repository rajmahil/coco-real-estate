import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const ProjectsWrap = styled.div`
  width: auto;
  margin-top: 90px;
  text-transform: uppercase;
  font-size: 1.8em;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-align: center;

  @media screen and (max-width: 375px) {
    font-size: 1.5em;
  }
`;

const Line = styled.div`
  width: ${({ isHover }) => (isHover ? "100%" : "20%")};
  height: 5px;
  background: #000;
  margin-top: 5px;
  transition: all 0.3s ease-out;
`;

const ViewAllProjects = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link passHref href="/projects">
      <ProjectsWrap
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        View All Projects <Line isHover={isHover} />
      </ProjectsWrap>
    </Link>
  );
};

export default ViewAllProjects;
