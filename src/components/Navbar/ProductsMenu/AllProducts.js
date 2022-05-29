import React from "react";
import styled from "styled-components";
// import StyledContainer from "./StyledContainer";
// import renderItems from "./renderItems";
import { AiOutlineDown } from "react-icons/ai";

const StyledList = styled.li`
  padding: 0 !important;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .left-down {
    position: relative;
    transform: rotate(0deg);
    transition: transform 0.2s;
  }
  &:hover .left-down {
    transform: rotate(90deg);
  }
`;

const AllProducts = () => {
  return (
    <StyledList className="vertical-line">
      <a href="#all">
        <span>جميع الفئات</span>
        <AiOutlineDown className="left-down" />
      </a>
      {/* <StyledContainer>{renderItems(allProducts)}</StyledContainer> */}
    </StyledList>
  );
};

export default AllProducts;
