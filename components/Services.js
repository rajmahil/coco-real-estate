import Link from "next/link";
import Image from "next/image";
import ServicesImage from "../public/Images/web-design-and-SEO-company-Saskatoon.png";
import ValueBgTwo from "../public/Images/ValueBgTwo.png";

const Services = () => {
  return (
    <div className="relative bg-red w-auto py-[45px] px-[22px] 575:py-[90px] 575:px-[75px]">
      <div className="absolute z-0 hidden 1000:block 1000:bottom-[40%] 1200:bottom-[30%] 1290:bottom-[20%] 1450:bottom-[9%] right-[75%] w-[350px]">
        <Image src={ValueBgTwo} />
      </div>
      <div className="max-w-[1400px] ml-auto mr-auto">
        <div className="max-w-[600px] pb-[22px]">
          <h2 className="sectionHeading text-white">
            Modern Websites and best-in-class digital marketing to grow your
            business online.
          </h2>
        </div>
        <div className="flex flex-col 1000:flex-row ">
          <div className="w-full 1000:w-[60%] p-0 1000:mb-0  mb-[24px] 1000:pr-[45px] ">
            <Image
              src={ServicesImage}
              alt="web design and SEO company Saskatoon"
            />
          </div>
          <div className="w-full 1000:w-[40%] ">
            <div className="w-auto">
              <div className="servicesCol">
                <div className="servicesTextNum">01</div>
                <h3 className="servicesHeading">Web Design + Development</h3>
                <p className="sectionParagraph text-white">
                  Your website is the primary tool to convert curious visitors
                  into potential clients. Coco Creative is a full-service web
                  design agency in{" "}
                  <a
                    className="underline"
                    href="https://en.wikipedia.org/wiki/Saskatoon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saskatoon
                  </a>
                  . We will build a fully-custom modern website, professionally
                  designed and developed by our experts. From start to finish,
                  We will aid you in the process of designing, developing,
                  hosting, maintaining, and updating your website.
                </p>
              </div>
              <div className="servicesCol">
                <div className="servicesTextNum">02</div>
                <h3 className="servicesHeading">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="sectionParagraph text-white">
                  For potential customers to find your website, strong SEO
                  (Search Engine Optimization) is necessary to earn top
                  positions. SEO success depends on various factors such as;
                  site speed, keywords, backlinks, etc.{" "}
                  <Link href="/services" passHref>
                    <span className="underline cursor-pointer">
                      Coco Creative&apos;s SEO specialists
                    </span>
                  </Link>{" "}
                  will help attract qualified prospects to your website, helping
                  your stand above the competition in Saskatoon.
                </p>
              </div>
              <div className="servicesCol" style={{ borderBottom: "none" }}>
                <div className="servicesTextNum">03</div>
                <h3 className="servicesHeading">Consulting</h3>
                <p className="sectionParagraph text-white">
                  Our web design and development consulting services provide the
                  necessary advice for clients in{" "}
                  <a
                    className="underline"
                    href="https://www.saskatoon.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saskatoon
                  </a>{" "}
                  . Whether it is about custom WordPress websites, reliable web
                  hosting, or affordable web design, our experts will help you
                  make the right moves. Working closely with our experts, we
                  will develop a strategy for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
