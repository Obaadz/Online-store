import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;

  /* Small */
  @media (min-width: 768px) {
    width: 768px;
  }
  /* Medium */
  @media (min-width: 992px) {
    width: 992px;
  }
  /* Large */
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
