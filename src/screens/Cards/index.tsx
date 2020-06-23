import React from "react";
import { View, Text, Dimensions } from "react-native";
import Card from "../../components/Card";

export interface Tab {
  id: number;
  name: string;
  thumbnail: number;
}

export const tabs: Tab[] = [
  {
    id: 1,
    name: "React Native",
    thumbnail: require("../../assets/react-native.png"),
  },
  {
    id: 2,
    name: "Expo",
    thumbnail: require("../../assets/expo.io.png"),
  },
  {
    id: 3,
    name: "Apple",
    thumbnail: require("../../assets/www.apple.com.png"),
  },
  {
    id: 4,
    name: "Start React Native",
    thumbnail: require("../../assets/start-react-native.dev.png"),
  },
  {
    id: 5,
    name: "Google",
    thumbnail: require("../../assets/www.google.com.png"),
  },
];

const Cards: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card />
    </View>
  );
};

export default Cards;
