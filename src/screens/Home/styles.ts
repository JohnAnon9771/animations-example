import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
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
  margin-left: 20px;
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

export const BlockText = styled.View`
  justify-content: space-around;
  margin: 20px;
  margin-left: 15px;
`;

export const BlockCategory = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

export const BlockFilter = styled.View`
  flex-direction: row;
`;

export const Search = styled.View`
  flex-direction: row;
  background-color: rgba(238, 238, 238, 0.5);
  align-items: center;
  padding: 15px;
  margin: 25px;
  margin-top: 30px;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  margin-left: 10px;
  width: 270px;
`;
