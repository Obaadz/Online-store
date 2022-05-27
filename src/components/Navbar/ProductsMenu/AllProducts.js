import React from "react";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

const StyledList = styled.li`
  padding: 0 !important;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const AllProducts = () => {
  return (
    <StyledList className="vertical-line">
      <a href="#all">
        <span>جميع الفئات</span>
        <AiOutlineDown />
      </a>
    </StyledList>
  );
};

export default AllProducts;
