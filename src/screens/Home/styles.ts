import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  margin-top: ${Constants.statusBarHeight + 14}px;
`;

export const Menu = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Photo = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-between;
`;

export const Block = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  margin-right: 10px;
`;
