import React from "react";
import styled from "styled-components";
import ProductsMenu from "./ProductsMenu/ProductsMenu";
import Bottom from "./Bottom/Bottom";
import Middle from "./Middle/Middle";
import Top from "./Top/Top";

const StyledNavbar = styled.div`
  font-family: "Noto Kufi Arabic";
  width: 100%;
  background-color: #0f5ba7;

  hr {
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Top />
      <Middle />
      <hr />
      <Bottom />
      <ProductsMenu />
    </StyledNavbar>
  );
};

export default Navbar;
