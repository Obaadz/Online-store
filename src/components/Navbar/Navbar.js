import React from "react";
import Logo from "../Logo";
import Search from "./Search";
import { IoCartOutline } from "react-icons/io5";
import Container from "../Container";
import "./verticalLine.css";
import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 100%;
  background-color: #0f5ba7;
`;

const StyledMiddle = styled(Container)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledCart = styled(IoCartOutline)`
  font-size: 2rem;
  color: white;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledMiddle>
        <a href="#cart" className="vr">
          <StyledCart />
        </a>
        <Search />
        <Logo />
      </StyledMiddle>
    </StyledNavbar>
  );
};

export default Navbar;
