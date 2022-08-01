import StatsBarImage from "../public/Images/StatsBarImage.png";
import Image from "next/image";

const StatsBar = () => {
  return (
    <div
      className="h-[800px] 925:h-auto relative py-[45px] px-[22px] 925:py-[90px] 925:px-[75px] flex "
      style={{
        background:
          "linear-gradient(180deg,rgba(206, 32, 47, 0.74),rgba(206, 32, 47, 0.74)),linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
    >
      <div className="absolute z-[-1] top-0 left-0 w-full 925:h-[450px] h-[800px]">
        <Image src={StatsBarImage} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full max-w-[1200px] ml-auto mr-auto flex justify-center items-center flex-col">
        <div className="sectionHeading text-white text-center ml-auto mr-auto">
          On average our websites generate:
        </div>
        <div className="flex w-full 925:flex-row flex-col">
          <div className="statsBarGrid">
            <div className="statsBarNumber">
              70<span className="text-[0.7em] ml-[3px]">%</span>
            </div>
            <div className="statsBarHeading">More website traffic</div>
          </div>
          <div className="statsBarGrid">
            <div className="statsBarNumber">
              7<span className="text-[0.7em] ml-[3px]">X</span>
            </div>
            <div className="statsBarHeading">More conversions</div>
          </div>
          <div className="statsBarGrid">
            <div className="statsBarNumber">
              5<span className="text-[0.7em] ml-[3px]">X</span>
            </div>
            <div className="statsBarHeading">Average ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
