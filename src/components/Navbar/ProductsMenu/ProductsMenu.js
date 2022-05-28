import React from "react";
import styled from "styled-components";
import Container from "../../Container";
import AllProducts from "./AllProducts";
import MenuItem from "./MenuItem";
import "../verticalLine.css";

const StyledMenu = styled.menu`
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  li {
    padding: 0.9rem 0;
    a {
      padding: 0.9rem 0.75rem;
    }

    &:first-child {
      font-weight: 600;

      a {
        padding-right: 0;
      }
    }

    &:hover {
      background-color: #f7f7f7;
    }
  }

  .vertical-line::after {
    height: 30%;
    right: 95%;
    background-color: #eee;
  }
`;

const StyledBg = styled.div`
  background-color: #fff;
  box-shadow: 1px 2px 6px 0px #d3d2d294;
  direction: rtl;
`;

const items = [
  { key: 1, href: "#drinks", name: "المشروبات" },
  { key: 2, href: "#tablets", name: "موبايلات، تابلت وأجهزة اليد الذكية" },
  { key: 3, href: "#electronics", name: "الإلكترونيات والأجهزة المنزلية" },
  { key: 4, href: "#supermarket", name: "السوبر ماركت" },
  { key: 5, href: "#food", name: "أطعمة طازجة" },
  { key: 6, href: "#baby", name: "مستلزمات الأطفال" },
  { key: 7, href: "#vegetables", name: "الخضار" },
];

const ProductsMenu = () => {
  function renderRemainingItems() {
    return items.map((item) => <MenuItem {...item} />);
  }

  return (
    <StyledBg>
      <Container>
        <StyledMenu>
          <AllProducts />
          {renderRemainingItems()}
        </StyledMenu>
      </Container>
    </StyledBg>
  );
};

export default ProductsMenu;
