import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import shopifyStoreMainImage from "../../public/Images/shopifyStoreMainImage.png";
import Image from "next/image";
import VapeMaestro1 from "../../public/Images/VapeMaestroImages/vapeMaestro1.png";
import VapeMaestro2 from "../../public/Images/VapeMaestroImages/vapeMaestro2.png";
import VapeMaestro3 from "../../public/Images/VapeMaestroImages/vapeMaestro3.png";
import VapeMaestro4 from "../../public/Images/VapeMaestroImages/vapeMaestro4.png";
import VapeMaestro5 from "../../public/Images/VapeMaestroImages/vapeMaestro5.png";
import shopifyLogo from "../../public/Images/shopifyLogo.png";
import nextJsLogo from "../../public/Images/nextJsLogo.png";
import graphQlLogo from "../../public/Images/graphQlLogo.png";
import tailwindCssLogo from "../../public/Images/tailwindCssLogo.svg";

import { FaCommentsDollar } from "react-icons/fa";
import Link from "next/link";

const CustomShopifyStores = () => {
  const [currImage, setCurrImage] = useState(0);

  const VapeMaestroImages = [
    VapeMaestro1,
    VapeMaestro2,
    VapeMaestro3,
    VapeMaestro4,
    VapeMaestro5,
  ];

  return (
    <div>
      <PageHeader
        heading="Custom"
        textSpan="Shopify Stores"
        paragraph="100% custom Shopify eCommerce web development in Saskatoon, SK."
      />
      <div
        className={`py-[45px] px-[22px] 650:py-[90px] 650:px-[45px] flex  items-center justify-center 1200:flex-row w-full flex-col bg-white`}
      >
        <div className={`w-full 1200:w-[45%] flex 1200:justify-end mb-8`}>
          <div className="max-w-[600px]">
            <Image src={shopifyStoreMainImage} />
          </div>
        </div>
        <div
          className={`w-full 1200:w-[45%] flex items-center 1200:ml-[40px] justify-start`}
        >
          <div className="max-w-[600px]">
            <h2 className="sectionHeading">
              Shopify eCommerce <span className="text-red">Web Design</span>
            </h2>
            <div className="sectionParagraph">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pretium accumsan lacus, eget aliquam ante molestie vitae.
              Pellentesque mi ligula, auctor sed vehicula a, cursus at lacus.
              Proin ut justo egestas, ultrices odio et, porttitor lectus.
              Curabitur ac iaculis sapien. In a hendrerit mi. Phasellus mollis
              nisl vitae lorem tempus tincidunt. Pellentesque neque magna,
              sollicitudin in pellentesque ac, luctus quis ligula. Nullam
              pretium, urna in tristique faucibus, tortor orci porta sapien, sed
              blandit tellus neque pellentesque tellus.
              <br /> <br /> Proin dapibus dignissim nunc, sed fermentum ex
              convallis eget. Sed metus ante, tristique ut congue nec, consequat
              bibendum nunc. Aliquam fringilla nisl quis magna egestas, faucibus
              volutpat urna hendrerit. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Vestibulum
              bibendum ac est eget interdum. Aliquam erat volutpat. Nam nec
              augue nisi. Ut molestie ante vel pellentesque maximus. Sed eget
              eros luctus metus lacinia laoreet non eget mauris. Quisque
              pulvinar nec dolor nec congue
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-black py-[45px] px-[12px] 650:py-[90px] 650:px-[45px] flex  items-center justify-center w-full flex-col text-white`}
      >
        <h2 className="sectionHeading ml-auto mb-10 text-center">
          Powerful eCommerce Tools To Grow Your Business
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
          <div className="shopifyWrap">
            <div className="text-[4em]">
              <FaCommentsDollar />
            </div>
            <h3 className="text-[1.8em] mt-2 font-bold">Mobile Commerce</h3>
            <p className="text-center">
              We love working with local family-owned and operated businesses in
              Saskatoon.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white  py-[45px] px-[12px] 650:py-[90px] 650:px-[45px]">
        <div className="w-full max-w-[1400px] ml-auto mr-auto flex flex-col 1200:flex-row ">
          <div className="w-full 1200:w-[50%] flex flex-col items-center 1200:items-end justify-center 1200:mb-0 mb-8">
            <div className="relative 650:w-[600px]  650:h-[600px] 550:w-[500px] 550:h-[500px] 450:h-[400px] 450:w-[400px] h-[350px] w-[350px]  bg-[#d4e356]">
              <Image src={VapeMaestroImages[currImage]} layout="fill" />
            </div>
            <div className="mt-5 flex flex-row items-center justify-center w-[500] 1200:w-[600px]">
              {VapeMaestroImages.map((image, index) => (
                <div
                  key={index}
                  className={`border-2  ${
                    currImage === index ? `border-red` : `border-black`
                  } m-1 cursor-pointer hover:border-red transition-all`}
                  onClick={() => setCurrImage(index)}
                >
                  <div className="550:w-[75px] 550:h-[75px] w-[60px] h-[60px] ">
                    <Image src={image} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full 1200:w-[50%] flex flex-col items-start justify-center max-w-[800px] 1200:max-w-none pl-0 1200:pl-[40px]">
            <h2 className="sectionHeading">
              Trusted by <span className="text-red">Local Businesses</span>
            </h2>
            <div className="subHeading text-[1.4em] font-bold mt-1 mb-5">
              Vape Maestro case study
            </div>
            <p className="sectionParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus orci cursus commodo aliquam. Aliquam auctor
              mollis velit sit amet facilisis. In condimentum sem accumsan ipsum
              blandit, et fermentum ligula convallis. Sed faucibus in leo eget
              vulputate. Morbi tincidunt et justo quis interdum. Morbi mollis
              vel libero sed interdum. Integer eu vulputate orci. Vestibulum eu
              velit a nisi volutpat consequat. Maecenas vel aliquam felis. Proin
              suscipit lorem eu sem ullamcorper iaculis. Proin hendrerit quam
              sit amet mattis dapibus.
              <br /> <br />
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Morbi sit amet justo aliquam, condimentum
              ex et, vehicula metus. Cras vulputate odio diam. Mauris consequat
              pretium magna, id commodo justo pretium eu. Sed laoreet faucibus
              aliquam. Aliquam hendrerit convallis felis, at interdum urna
              dapibus rhoncus. Suspendisse in eleifend elit, vel tempor eros.
            </p>
            <div className="flex 450:flex-row flex-col ml-auto mr-auto 450:ml-0 450:mr-0  flex-wrap mt-4">
              <div className="mr-2 m-2 w-[150px] 450:mb-0 mb-5">
                <Image src={shopifyLogo} />
              </div>
              <div className="mr-2 m-2 w-[120px] 450:-mt-3 450:mb-0 mb-5">
                <Image src={nextJsLogo} />
              </div>
              <div className="mr-2 m-2 w-[170px] mt-1 450:mb-0 mb-5">
                <Image src={graphQlLogo} />
              </div>
              <div className="mr-2 m-2 w-[140px]  450:-mt-3 450:mb-0 mb-5">
                <Image src={tailwindCssLogo} />
              </div>
            </div>
            <a
              passHref
              href="https://vape-maestro.vercel.app/"
              target="_blank"
              className="mt-10 450:ml-0 450:mr-0 ml-auto mr-auto"
            >
              <div className="p-4 text-[1.2em] bg-red text-white hover:bg-black transition-all ">
                Visit Website
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomShopifyStores;
