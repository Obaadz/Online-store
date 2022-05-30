import React, { useState } from "react";
import styled from "styled-components";
import StyledContainer from "./StyledContainer";
import renderItems from "./renderItems";
import { AiOutlineDown } from "react-icons/ai";
import CategoriesItem from "./CategoriesItem";

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

const StyledContainerV2 = styled(StyledContainer)`
  padding: 0;
  flex-direction: row;
`;

const StyledCategories = styled.ul`
  font-weight: 400;
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-left: 1px solid #eee;
  overflow: hidden;

  li:hover,
  li.current {
    font-weight: 600;
    background-color: rgb(230, 230, 230);
    opacity: 0.8;
  }
  li a {
    padding: 10px;
  }
`;

const StyledCategoryItems = styled.div`
  height: 100%;
  flex: 1;
  width: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
  row-gap: 10px;
  overflow: hidden;

  li {
    font-weight: 400;
  }
`;

const DEFAULT_CATEGORY = 1;

const AllCategories = ({ allProducts }) => {
  const [currentCategoryID, setCurrentCategoryID] = useState(DEFAULT_CATEGORY);
  function renderList() {
    return allProducts.map(({ name, key, href }) => (
      <CategoriesItem
        key={key}
        data_id={key}
        name={name}
        href={href}
        setCurrentCategoryID={setCurrentCategoryID}
        currentCategoryID={currentCategoryID}
      />
    ));
  }

  function handleHoverIn() {
    document.documentElement.style.backgroundColor = "rgb(62, 62, 62)";
  }

  function handleHoverOut() {
    document.documentElement.style.backgroundColor = "";
    setCurrentCategoryID(DEFAULT_CATEGORY);
  }

  return (
    <StyledList
      className="vertical-line"
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <a href="#all">
        <span>جميع الفئات</span>
        <AiOutlineDown className="left-down" />
      </a>
      <StyledContainerV2>
        <StyledCategories>{renderList()}</StyledCategories>
        <StyledCategoryItems>
          {renderItems(allProducts[currentCategoryID - 1].products)}
        </StyledCategoryItems>
      </StyledContainerV2>
    </StyledList>
  );
};

export default AllCategories;
