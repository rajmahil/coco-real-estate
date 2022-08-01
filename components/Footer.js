import Image from "next/image";
import Link from "next/link";
import cocoCreativeLogo from "../public/Images/CocoCreativeLogo.png";
import { useState, useEffect } from "react";

const Footer = () => {
  const [curDate, setCurDate] = useState();

  useEffect(() => {
    var currentTime = new Date();
    setCurDate(currentTime.getFullYear());
  }, []);
  return (
    <div className="w-auto bg-black px-[22px] py-[45px]  975:px-[75px] 975:pt-[75px] 975:pb-[40px]">
      <div className="max-w-[1400px] ml-auto mr-auto flex pb-[45px] border-b-[1px] border-white mb-[25px] 975:flex-row flex-col">
        <div className="w-full 975:w-[35%] 975:block flex items-center justify-center">
          <div className="w-[275px]">
            <Image
              src={cocoCreativeLogo}
              alt="Coco Creative logo - custom website design Saskatoon"
            />
          </div>
        </div>
        <div className="975:w-[65%] w-full flex 975:flex-row flex-col">
          <div className="footerCols">
            <h3 className="footerHeading">Quick Links</h3>
            <Link href="/" passHref>
              <div className="footerLinks">Home</div>
            </Link>
            <Link href="/about" passHref>
              <div className="footerLinks">About Us</div>
            </Link>
            <Link href="/portfolio" passHref>
              <div className="footerLinks">Portfolio</div>
            </Link>
            <Link href="/services" passHref>
              <div className="footerLinks">Services</div>
            </Link>
            <Link href="/contact" passHref>
              <div className="footerLinks">Contact Us</div>
            </Link>
          </div>
          <div className="footerCols">
            <h3 className="footerHeading">Follow Us</h3>
            <div className="footerLinks">Facebook</div>
            <div className="footerLinks">Instagram</div>
          </div>
          <div className="footerCols">
            <h3 className="footerHeading">Contact Us</h3>
            <Link href="mailto:info@cococreativeweb.com" passHref>
              <div className="footerLinks">Em: info@cococreativeweb.com</div>
            </Link>
            <Link href="tel:306-716-3130" passHref>
              <div className="footerLinks">Ph: 306-716-3130</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-auto flex items-center justify-center">
        <div className="text-[1em] text-white mt-0 ml-auto mr-auto text-center">
          Copyright © {curDate} Coco Creative. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
