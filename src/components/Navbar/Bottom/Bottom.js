import React from "react";
import styled from "styled-components";
import Container from "../../Container";
import Location from "./Location";
import Truck from "./Truck";
import ShopNow from "./ShopNow";

const StyledBottom = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  direction: rtl;
  color: white;
`;

const StyledDeliveryDate = styled.div`
  display: flex;
  gap: 20px;
`;

const Bottom = () => {
  return (
    <StyledBottom>
      <StyledDeliveryDate>
        <Truck />
        <ShopNow />
      </StyledDeliveryDate>
      <Location />
    </StyledBottom>
  );
};

export default Bottom;
