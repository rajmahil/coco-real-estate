import styled from "styled-components";
import StatsBarImage from "../public/Images/StatsBarImage.png";
import { SectionHeading } from "../styles/global";

const StatsBarContainer = styled.div`
  padding: 90px 75px;
  display: flex;
  background: linear-gradient(
      180deg,
      rgba(206, 32, 47, 0.74),
      rgba(206, 32, 47, 0.74)
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${StatsBarImage.src});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 925px) {
    padding: 45px 22px;
  }
`;
const StatsBarWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StatsBarGridWrap = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 925px) {
    flex-direction: column;
  }
`;
const StatsBarGrid = styled.div`
  width: 32%;
  padding: 24px;

  @media screen and (max-width: 925px) {
    width: 100%;
  }
`;
const StatsBarNumber = styled.div`
  color: #fff;
  font-size: 7em;
  line-height: 120px;
  font-weight: 800;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 5em;
    line-height: 100px;
  }
`;
const StatsBarHeading = styled.h3`
  color: #fff;
  font-size: 1.4em;
  font-weight: 700;
  text-align: center;
  margin: 0px;
`;

const StatsBar = () => {
  return (
    <StatsBarContainer>
      <StatsBarWrap>
        <SectionHeading style={{ color: "#fff", textAlign: "center" }}>
          On average our websites generate:
        </SectionHeading>
        <StatsBarGridWrap>
          <StatsBarGrid>
            <StatsBarNumber>
              70<span style={{ fontSize: "0.7em", marginLeft: "3px" }}>%</span>
            </StatsBarNumber>
            <StatsBarHeading>More website traffic</StatsBarHeading>
          </StatsBarGrid>
          <StatsBarGrid>
            <StatsBarNumber>
              7<span style={{ fontSize: "0.7em", marginLeft: "3px" }}>X</span>
            </StatsBarNumber>
            <StatsBarHeading>More conversions</StatsBarHeading>
          </StatsBarGrid>
          <StatsBarGrid>
            <StatsBarNumber>
              5<span style={{ fontSize: "0.7em", marginLeft: "3px" }}>X</span>
            </StatsBarNumber>
            <StatsBarHeading>Average ROI</StatsBarHeading>
          </StatsBarGrid>
        </StatsBarGridWrap>
      </StatsBarWrap>
    </StatsBarContainer>
  );
};

export default StatsBar;
