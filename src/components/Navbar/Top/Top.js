import React from "react";
import styled from "styled-components";
import Container from "../../Container";
import {
  nav_fastdelivery,
  nav_delivermore,
  nav_refund,
  nav_callme,
  nav_freedelivery,
  nav_million_products,
  nav_free_returns,
} from "../images";
import "../verticalLine.css";

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
    position: relative;
    font-size: 0.7rem;
    cursor: pointer;

    span {
      font-weight: 600;
      margin-right: 10px;
    }

    &:hover > div {
      visibility: visible;
      opacity: 1;
      top: 40px;
    }

    & > div {
      visibility: hidden;
      position: absolute;
      top: 70px;
      background-color: white;
      color: black;
      display: flex;
      gap: 30px;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 1px 2px 6px 0px #d3d2d294;
      opacity: 0;
      transition: all 0.3s;
      cursor: auto;

      img {
        height: 120px;
      }

      div {
        width: max-content;
        p {
          margin-top: 10px;
          max-width: 30ch;
          line-height: 1.8;
        }
      }

      &::after {
        content: "";
        position: absolute;
        border: 10px solid;
        border-color: transparent transparent white transparent;
        top: -20px;
        right: 40px;
      }
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
            <div>
              <img src={nav_freedelivery} alt="free delivery" />
              <div>
                <h2>توصيل سريع</h2>
                <p>
                  اطلب أي وقت ومن أي مكان واستمتع بتوصيل مجاني لجميع طلباتك
                  بقيمة 100 جنيه أو أكثر!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={nav_delivermore} alt="deliver more then 15k products" />
            <span>تسوق أكثر من 15000 منتج.</span>
            <div>
              <img src={nav_million_products} alt="million products" />
              <div>
                <h2>تسوق أكثر من 15000 منتج.</h2>
                <p>
                  تسوق أكثر من 15000 منتج تصفح مجموعة كبيرة من الأطعمة الطازجة،
                  والبقالة والإلكترونيات والمزيد!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={nav_refund} alt="free refund" />
            <span>إرجاع مجاني</span>
            <div>
              <img src={nav_free_returns} alt="free returns" />
              <div>
                <h2>إرجاع مجاني</h2>
                <p>إرجاع مجاني بدون متاعب لكل طلباتك وبدون أي رسوم</p>
              </div>
            </div>
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
