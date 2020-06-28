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
    shadowColor: "#7159c1",
    shadowRadius: 10,
    shadowOffset: {
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
    },
  },
});

const { add, Value, Extrapolate, sub, interpolate } = Animated;

interface Props {
  index: number;
  y: Animated.Value<number>;
}

const CardForList: React.FC<Props> = ({ index, y }) => {
  const position = sub(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = add(
    y,
    y.interpolate({
      inputRange: [0, index * CARD_HEIGHT],
      outputRange: [0, -index * CARD_HEIGHT],
      extrapolate: Extrapolate.CLAMP,
    }),
    interpolate(position, {
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: Extrapolate.CLAMP,
    })
  );

  const scale = interpolate(position, {
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacity = interpolate(position, {
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }, { scale }], opacity },
      ]}
    >
      <Text>Hello world! index: {index}</Text>
      <Animated.Text>{y}</Animated.Text>
    </Animated.View>
  );
};

export default CardForList;
