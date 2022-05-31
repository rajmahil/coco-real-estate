import React from "react";
import styled from "styled-components";
import { RedTextSpan, SectionHeading } from "../styles/global";
import FaqComponent from "./FaqComponent";

const FaqContainer = styled.div`
  padding: 90px 0px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 975px) {
    padding: 45px 22px;
  }
`;

const FaqWrap = styled.div`
  width: 100%;
  max-width: 850px;
  margin-top: 45px;
`;

const Faq = () => {
  return (
    <FaqContainer>
      <SectionHeading style={{ marginLeft: "auto", textAlign: "center" }}>
        Frequently Asked <RedTextSpan>Questions</RedTextSpan>
      </SectionHeading>
      <FaqWrap>
        <FaqComponent
          question="Do you create WordPress websites? "
          answer="Yes! WordPress is an excellent content management system (CMS) that powers more than 30% of all websites. From start to finish, Coco Creative can help with WordPress SEO, WordPress hosting, custom WordPress themes, and more! Coco Creative is the premier choice for all things WordPress in Saskatoon, Saskatchewan!"
        />
        <FaqComponent
          question="How much does a new website cost?"
          answer="The cost of your website will depend on the needs of your project. Every website is unique with different requirements. At Coco Creative, we will develop fully-custom websites specifically for your business. Contact us to get an exact quote, and we will discuss your project by providing the necessary information. 
          "
        />
        <FaqComponent
          question="What if I need help edits on my site down the road?"
          answer="We are always one email or call away! Whether its small additions or large edits on your website, we will always be there to help."
        />
        <FaqComponent
          question="How soon can my website launch?"
          answer="Your custom website launch date will depend on the complexity of your website. On average, our turnaround is between 4 to 6 weeks. If you have a specific launch date in mind, we can discuss options to meet your given timeline. "
        />
        <FaqComponent
          question="What sort of ongoing services do you provide?"
          answer="Coco Creative offers a variety of ongoing services to help your business succeed. Our SEO and digital marketing experts can help you with organic SEO, blog writing, email campaign, Pay-Per-Click advertising, and much more! Contact us to get more information."
        />
      </FaqWrap>
    </FaqContainer>
  );
};

export default Faq;
