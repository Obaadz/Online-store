import React from "react";
import styled from "styled-components";
import { BsTruck } from "react-icons/bs";

const StyledTruck = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;

  span {
    font-size: 0.75rem;
  }
`;
const Truck = () => {
  return (
    <StyledTruck>
      <BsTruck fontSize="1.2rem" />
      <span>التسليم القياسي التالي - غدا 12 pm - 3 pm</span>
    </StyledTruck>
  );
};

export default Truck;
