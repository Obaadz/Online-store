import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Account from "./Account";
import Search from "./Search";
import Container from "../../Container";
import Logo from "../../Logo";
import { AiOutlineMenu } from "react-icons/ai";

const StyledMiddle = styled(Container)`
  display: flex;
  align-items: center;
  /* gap: 20px; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-end;
  }
`;

const StyledBarsIcon = styled(AiOutlineMenu)`
  box-sizing: content-box;
  font-size: 1.4rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;

  @media (min-width: 993px) {
    display: none;
  }
`;

const Middle = () => {
  return (
    <StyledMiddle>
      <Cart />
      <Account />
      <Search />
      <Logo />
      <StyledBarsIcon />
    </StyledMiddle>
  );
};

export default Middle;
