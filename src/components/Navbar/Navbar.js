import React from "react";
import styled from "styled-components";
import Middle from "./Middle";

const StyledNavbar = styled.div`
  width: 100%;
  background-color: #0f5ba7;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Middle />
    </StyledNavbar>
  );
};

export default Navbar;
