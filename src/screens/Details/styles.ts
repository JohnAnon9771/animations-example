import styled from "styled-components/native";
import Constants from "expo-constants";
import { BaseButton } from "react-native-gesture-handler";

export const Block = styled.View`
  margin-left: 30px;
  margin-right: 30px;
`;

export const BlockText = styled.View`
  flex-direction: row;
  margin-top: 25px;
`;

export const BlockStar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const GoBack = styled(BaseButton)`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  left: 15px;
  z-index: 5;
  top: ${Constants.statusBarHeight + 14}px;
`;

export const CardImage = styled.Image`
  z-index: 1;
  width: 411.5px;
  height: 350px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 55px;
`;
