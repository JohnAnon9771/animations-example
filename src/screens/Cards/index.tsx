import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

import Card, { CARD_COLUMNS, CARD_SIZE } from "../../components/Card";
import SortableTab from "../../components/SortableTab";

export interface Card {
  id: number;
  name: string;
  thumbnail: ImageSourcePropType;
}

export const tabs: Card[] = [
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

const { Value } = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1d1e",
  },
});

const Cards: React.FC = () => {
  const offsets = tabs.map((_, index) => ({
    x: new Value(index % CARD_COLUMNS === 0 ? 0 : CARD_SIZE),
    y: new Value(Math.floor(index / CARD_COLUMNS) * CARD_SIZE),
  }));
  return (
    <View style={styles.container}>
      {tabs.map((card, index) => (
        <SortableTab
          key={card.id}
          card={card}
          index={index}
          offsets={offsets}
        />
      ))}
    </View>
  );
};

export default Cards;
