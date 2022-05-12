import React from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import "./verticalLine.css";

const StyledCart = styled.div`
  height: 32px;
  padding-right: 10px;
`;

const StyledCartIcon = styled(IoCartOutline)`
  font-size: 2rem;
  color: white;
`;

const Cart = () => {
  return (
    <StyledCart className="vertical-line">
      <a href="#cart">
        <StyledCartIcon />
      </a>
    </StyledCart>
  );
};

export default Cart;
