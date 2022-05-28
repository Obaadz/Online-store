import React from "react";
import styled from "styled-components";
import Container from "../../Container";

const StyledProducts = styled(Container)`
  display: none;
  position: absolute;
  top: 45px;
  right: 0%;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 70vh;
  background-color: #fff;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #eee;
`;

const StyledItem = styled.ul``;

const MenuItem = ({ name, href, products }) => {
  function renderProducts() {
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

  function handleHoverIn() {
    document.documentElement.style.backgroundColor = "rgb(62, 62, 62)";
  }

  function handleHoverOut() {
    document.documentElement.style.backgroundColor = "";
  }

  return (
    <li onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
      <a href={href}>{name}</a>
      {products.length > 0 && (
        <StyledProducts>{renderProducts()}</StyledProducts>
      )}
    </li>
  );
};

export default MenuItem;
