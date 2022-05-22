import React from "react";
import styled from "styled-components";
import Container from "../Container";
import nav_fastdelivery from "../../assets/images/nav_fastdelivery.svg";
import nav_delivermore from "../../assets/images/nav_delivermore.svg";
import nav_refund from "../../assets/images/nav_refund.svg";
import nav_callme from "../../assets/images/nav_callme.svg";
import "./verticalLine.css";

const StyledTop = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  direction: rtl;
  background-color: #234e91;
  user-select: none;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const StyledInfo = styled.div`
  display: flex;
  gap: 20px;
  & > div {
    font-size: 0.7rem;
    cursor: pointer;

    span {
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;
const StyeldCallme = styled.div`
  font-size: 0.8rem;

  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;

const Top = () => {
  return (
    <StyledTop>
      <StyledContainer>
        <StyledInfo>
          <div>
            <img src={nav_fastdelivery} alt="fast delivery" />
            <span>توصيل مجاني وسريع</span>
          </div>
          <div>
            <img src={nav_delivermore} alt="fast delivery" />
            <span>تسوق أكثر من 15000 منتج.</span>
          </div>
          <div>
            <img src={nav_refund} alt="fast delivery" />
            <span>إرجاع مجاني</span>
          </div>
        </StyledInfo>
        <StyeldCallme>
          <img src={nav_callme} alt="callme" />
          <span>16061</span>
        </StyeldCallme>
      </StyledContainer>
    </StyledTop>
  );
};

export default Top;
