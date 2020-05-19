import React from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");

const CARD_PADDING = 50;
const CARD_WIDTH = screenWidth - CARD_PADDING * 2;
const { ScrollView, View, Value, interpolate, multiply, sub, add } = Animated;

export default function Carousel() {
  const offsetX = new Value(0);
  return (
    <ScrollView
      horizontal
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={CARD_WIDTH}
      style={{ paddingVertical: 50 }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: CARD_PADDING }}
      scrollEventThrottle={1}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: offsetX,
            },
          },
        },
      ])}
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
            transform: [
              {
                scale: interpolate(offsetX, {
                  inputRange: [
                    multiply(sub(index, 1), CARD_WIDTH),
                    multiply(index, CARD_WIDTH),
                    multiply(add(index, 1), CARD_WIDTH),
                  ],
                  outputRange: [0.9, 1, 0.9],
                }),
              },
            ],
            opacity: interpolate(offsetX, {
              inputRange: [
                multiply(sub(index, 1), CARD_WIDTH),
                multiply(index, CARD_WIDTH),
                multiply(add(index, 1), CARD_WIDTH),
              ],
              outputRange: [0.5, 1, 0.5],
            }),
          }}
        />
      ))}
    </ScrollView>
  );
}
