import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import Animated from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
export const CARD_HEIGHT = height / 4;
export const CARD_WIDTH = width * 0.8;

export const styles = StyleSheet.create({
  container: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});

const { add, Value, Extrapolate } = Animated;

interface Props {
  index: number;
  y: Animated.Value<number>;
}

const CardForList: React.FC<Props> = ({ index, y }) => {
  // const position = subtract(index * CARD_HEIGHT, y);
  // const position = new Value(0);

  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = add(
    y,
    y.interpolate({
      inputRange: [0, 0.0001 + index * CARD_HEIGHT],
      outputRange: [0, -index * CARD_HEIGHT],
      extrapolate: Extrapolate.CLAMP,
    })
  );

  // const scale = position.interpolate({
  //   inputRange: [isDisappearing, isTop, isBottom, isAppearing],
  //   outputRange: [0.5, 1, 1, 0.5],
  //   extrapolate: "clamp",
  // });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Text>Hello world! index: {index}</Text>
      <Animated.Text>{y}</Animated.Text>
    </Animated.View>
  );
};

export default CardForList;
