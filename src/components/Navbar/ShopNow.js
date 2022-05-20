import React from "react";
import styled from "styled-components";
import motorcycle from "../../assets/images/motorcycle.svg";

const StyledNow = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;

  span {
    font-size: 0.75rem;
  }
`;
const ShopNow = () => {
  return (
    <StyledNow>
      <img src={motorcycle} alt="ShopNow" />
      <span>الآن التوصيل - يبدأ غدا 9 ص</span>
    </StyledNow>
  );
};

export default ShopNow;
