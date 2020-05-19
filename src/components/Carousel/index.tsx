import React from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");

const CARD_PADDING = 50;
const CARD_WIDTH = screenWidth - CARD_PADDING * 2;

export default function Carousel() {
  const { ScrollView, View } = Animated;
  return (
    <ScrollView
      horizontal
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={CARD_WIDTH}
      style={{ paddingVertical: 50 }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: CARD_PADDING }}
    >
      {Array.from({ length: 10 }).map((card, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            width: CARD_WIDTH,
            borderWidth: 1,
            borderColor: "red",
            backgroundColor: "lightgreen",
          }}
        />
      ))}
    </ScrollView>
  );
}
