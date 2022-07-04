import React from "react";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import "../verticalLine.css";

const StyledAccount = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.75rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: white;
  }
`;

const StyledText = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

const StyledUserIcon = styled(FaRegUserCircle)`
  color: white;
  font-size: 2em;
`;

const Account = () => {
  return (
    <StyledAccount className="vertical-line">
      <StyledLink href="Login">
        {/* <StyledArrowIcon /> */}
        <StyledText>تسجيل الدخول و التسجيل</StyledText>
        <StyledUserIcon />
      </StyledLink>
    </StyledAccount>
  );
};

export default Account;
