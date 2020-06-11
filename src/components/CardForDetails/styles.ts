import styled from "styled-components/native";

export const Block = styled.View`
  justify-content: flex-end;
  margin: 10px;
`;

export const BlockText = styled.View`
  position: absolute;
  align-items: flex-start;
  margin-left: 15px;
  top: 60px;
  z-index: 5;
`;

export const BlockIcon = styled.View`
  position: absolute;
  left: 125px;
  top: 15px;
  z-index: 5;
`;

export const CardImage = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 20px;
`;
