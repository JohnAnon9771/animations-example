import styled from "styled-components/native";

export const Block = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 190px;
  height: 280px;
  border-radius: 20px;
`;

export const CardText = styled.View`
  z-index: 5;
  position: absolute;
  top: 15px;
  left: 15px;
`;
