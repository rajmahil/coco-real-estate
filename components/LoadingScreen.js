import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[10000] bg-white flex items-center justify-center">
      <h1 className="420:text-[4em] text-[3em] uppercase font-extrabold">
        Loading...
      </h1>
    </div>
  );
};

export default LoadingScreen;
