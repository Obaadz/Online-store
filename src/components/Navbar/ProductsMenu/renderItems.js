import React from "react";
import styled from "styled-components";

const StyledItem = styled.ul`
  font-size: 0.75rem;

  h3 {
    color: rgb(77, 77, 77);
    font-weight: 600;
    margin-bottom: 10px;
    user-select: none;
  }

  li + li {
    margin-top: 5px;
  }

  li a:hover {
    color: rgb(14, 90, 167);
    font-weight: 500;
  }
`;

function renderItems(products) {
  console.log(products);
  return products.map(({ name, items }) => (
    <StyledItem key={name}>
      <h3>{name}</h3>
      {items.map((item) => (
        <li key={item}>
          <a href="#item">{item}</a>
        </li>
      ))}
    </StyledItem>
  ));
}

export default renderItems;
