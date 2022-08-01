import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FaqComponent = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="border-2 border-black p-[20px] overflow-hidden transition-all my-[20px] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[1.2em] 650:text-[1.4em] m-0 font-[500] ">
          {question}
        </h3>
        <div
          className={`w-auto text-[2.2em] flex items-center justify-center cursor-pointer transition-all text-black hover:text-red ${
            isOpen ? "rotate-[0deg]" : "rotate-[90deg]"
          }`}
          isOpen={isOpen}
          isHover={isHover}
        >
          <FaAngleDown />
        </div>
      </div>
      <div
        className={`w-full transition-all ${
          isOpen ? "flex" : "hidden"
        } overflow-hidden`}
        isOpen={isOpen}
      >
        <p className="sectionParagraph mb-0">{answer}</p>
      </div>
    </div>
  );
};

export default FaqComponent;
