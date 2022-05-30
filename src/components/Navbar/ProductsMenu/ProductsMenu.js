import React from "react";
import styled from "styled-components";
import Container from "../../Container";
import AllCategories from "./AllCategories";
import MenuItem from "./MenuItem";
import { items } from "../data";
import "../verticalLine.css";

const StyledMenu = styled.menu`
  position: relative;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  & > li {
    padding: 0.9rem 0;
    & > a {
      padding: 0.9rem 0.75rem;
    }

    &:first-child {
      font-weight: 600;

      & > a {
        padding-right: 0;
      }
    }

    &:hover {
      & > a {
        color: rgb(14, 90, 167);
      }
      background-color: #f7f7f7;

      & > div {
        display: flex;
      }
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

// const allProducts = items.map(({ products }) => products).flat(1);

const ProductsMenu = () => {
  function renderRemainingItems() {
    return items.map((item) => <MenuItem {...item} />);
  }

  return (
    <StyledBg>
      <Container>
        <StyledMenu>
          <AllCategories allProducts={items} />
          {renderRemainingItems()}
        </StyledMenu>
      </Container>
    </StyledBg>
  );
};

export default ProductsMenu;
