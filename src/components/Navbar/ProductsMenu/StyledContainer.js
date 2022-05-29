import styled from "styled-components";
import Container from "../../Container";

const StyledContainer = styled(Container)`
  display: none;
  position: absolute;
  top: 45px;
  right: 0%;
  flex-wrap: wrap;
  flex-direction: column;
  height: 70vh;
  background-color: #fff;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #eee;
`;

export default StyledContainer;
