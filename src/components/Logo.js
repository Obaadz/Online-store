import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const StyledLink = styled.a`
  height: 36px;
`;

const Logo = () => {
  return (
    <div>
      <StyledLink href="/">
        <img src={logo} alt="Logo" />
      </StyledLink>
    </div>
  );
};

export default Logo;
