import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Account from "./Account";
import Search from "./Search";
import Container from "../../Container";
import Logo from "../../Logo";

const StyledMiddle = styled(Container)`
  display: flex;
  align-items: center;
  /* gap: 20px; */
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Middle = () => {
  return (
    <StyledMiddle>
      <Cart />
      <Account />
      <Search />
      <Logo />
    </StyledMiddle>
  );
};

export default Middle;