import React from "react";
import styled from "styled-components";

const LoadingScreenWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingHeading = styled.h1`
  font-size: 4em;
  text-transform: uppercase;
  font-weight: 800;

  @media screen and (max-width: 420px) {
    font-size: 3em;
  }
`;

const LoadingScreen = () => {
  return (
    <LoadingScreenWrap>
      <LoadingHeading>Loading...</LoadingHeading>
    </LoadingScreenWrap>
  );
};

export default LoadingScreen;
