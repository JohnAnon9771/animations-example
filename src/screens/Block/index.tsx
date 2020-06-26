import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { panGestureHandler } from "react-native-redash";
import Animated from "react-native-reanimated";

const { height, width } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    backgroundColor: "#7159c1",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

const { Value, cond, eq, add, set } = Animated;

function withOffset(
  value: Animated.Value<number>,
  state: Animated.Value<State>,
  offset: Animated.Value<number>
) {
  const safeOffset = new Value(0);
  return cond(
    eq(state, State.ACTIVE),
    add(safeOffset, value),
    set(safeOffset, value)
  );
}

const Block: React.FC = () => {
  const { gestureHandler, translation, state } = panGestureHandler();
  const offsetX = new Value(0);
  const x = withOffset(translation.x, state, offsetX);
  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.block, { transform: [{ translateX: x }] }]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Block;
