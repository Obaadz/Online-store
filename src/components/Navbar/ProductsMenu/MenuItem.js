import React from "react";
import StyledContainer from "./StyledContainer";
import renderItems from "./renderItems";

const MenuItem = ({ name, href, products }) => {
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
        <StyledContainer>{renderItems(products)}</StyledContainer>
      )}
    </li>
  );
};

export default MenuItem;
