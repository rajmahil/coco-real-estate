import Link from "next/link";

const MainCallToAction = () => {
  return (
    <div className="p-[20px] 700:p-[20px]">
      <div className="bg-red flex items-center justify-center py-[45px] px-[22px] 700:py-[90px] 700:px-[75px] ">
        <div className="max-w-[1400px] text-white w-full flex flex-col 975:flex-row items-start 975:items-center justify-between">
          <div className="text-white max-w-[520px] text-left">
            <h2 className="sectionHeading">Ready to get started? </h2>
            <p className="sectionParagraph text-white ">
              Let&apos;s discuss your project. We promise to respond within 24
              hours!
            </p>
          </div>
          <Link href="/contact" passHref>
            <div className="secGlobalButton border-white text-white hover:border-black">
              Let&apos;s Get in Touch!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCallToAction;
