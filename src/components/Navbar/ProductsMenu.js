import React from "react";
import styled from "styled-components";
import Container from "../Container";
import "./verticalLine.css";

const StyledMenu = styled.menu`
  font-size: 0.85rem;
  display: flex;
  align-items: center;

  li {
    padding: 1rem 0;
    a {
      padding: 1rem 0.75rem;
    }

    &:first-child {
      font-weight: 600;

      a {
        padding-right: 0;
      }
    }

    &:hover {
      background-color: #eee;
      text-decoration: underline;
    }
  }

  .vertical-line::after {
    height: 30%;
    right: 90%;
    background-color: #eee;
  }
`;

const StyledBg = styled.div`
  background-color: #fff;
  box-shadow: 1px 2px 6px 0px #d3d2d294;
  direction: rtl;
`;

const ProductsMenu = () => {
  return (
    <StyledBg>
      <Container>
        <StyledMenu>
          <li className="vertical-line">
            <a href="#all">جميع الفئات</a>
          </li>
          <li>
            <a href="#drinks">المشروبات</a>
          </li>
          <li>
            <a href="#tablets">موبايلات، تابلت وأجهزة اليد الذكية</a>
          </li>
          <li>
            <a href="#electronics">الإلكترونيات والأجهزة المنزلية</a>
          </li>
          <li>
            <a href="#supermarket">السوبر ماركت</a>
          </li>
          <li>
            <a href="#food">أطعمة طازجة</a>
          </li>
          <li>
            <a href="#baby">مستلزمات الأطفال</a>
          </li>
          <li>
            <a href="#vegetables">الخضار</a>
          </li>
        </StyledMenu>
      </Container>
    </StyledBg>
  );
};

export default ProductsMenu;
