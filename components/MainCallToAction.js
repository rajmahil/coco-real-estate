import styled from "styled-components";
import { SectionHeading, Paragraph, SecGlobalButton } from "../styles/global";
import Link from "next/link";

const CtaContainer = styled.div`
  padding: 20px;

  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;
const CtaWrap = styled.div`
  background: #c21e2c;
  padding: 90px 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    padding: 45px 22px;
  }
`;
const CtaContentWrap = styled.div`
  max-width: 1400px;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 975px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TextWrap = styled.div`
  color: #fff;
  max-width: 520px;

  @media screen and (max-width: 975px) {
    text-align: left;
  }
`;

const MainCallToAction = () => {
  return (
    <CtaContainer>
      <CtaWrap>
        <CtaContentWrap>
          <TextWrap>
            <SectionHeading>Ready to get started? </SectionHeading>
            <Paragraph style={{ color: "#fff", marginTop: "5px" }}>
              Let&apos;s discuss your project. We promise to respond within 24
              hours!
            </Paragraph>
          </TextWrap>
          <Link href="/contact" passHref>
            <SecGlobalButton white={true}>
              Let&apos;s Get in Touch!
            </SecGlobalButton>
          </Link>
        </CtaContentWrap>
      </CtaWrap>
    </CtaContainer>
  );
};

export default MainCallToAction;
