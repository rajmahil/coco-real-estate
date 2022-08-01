import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ViewProjectBtn = ({ href, text, blank }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {blank ? (
        <a
          style={{ color: "#000", textDecoration: "none" }}
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          <div
            className={`w-auto flex items-center cursor-pointer `}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="text-[1.2em] 500:text-[1.4em] font-semibold">
              {text}
            </div>
            <div
              className={`text-[1.8em] flex items-center ml-[5px] hover:ml-[15px] transition-all ${
                isHover ? "ml-[10px]" : "ml-0"
              }`}
            >
              <FiArrowRight />
            </div>
          </div>
        </a>
      ) : (
        <Link passHref href={href}>
          <div
            className={`w-auto flex items-center cursor-pointer `}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="text-[1.2em] 500:text-[1.4em] font-semibold">
              {text}
            </div>
            <div
              className={`text-[1.8em] flex items-center ml-[5px] hover:ml-[15px] transition-all ${
                isHover ? "ml-[10px]" : "ml-0"
              }`}
            >
              <FiArrowRight />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ViewProjectBtn;
