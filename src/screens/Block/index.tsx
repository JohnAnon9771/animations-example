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
  translation: Animated.Value<number>,
  state: Animated.Value<State>
) {
  const start = new Value(0);
  const dragging = new Value(0);
  const position = new Value(0);

  return cond(
    eq(state, State.ACTIVE),
    [
      cond(eq(dragging, 0), [set(dragging, 1), set(start, position)]),
      set(position, add(start, translation)),
    ],
    [set(dragging, 0), position]
  );
}

function stopWhenNeeded(params: type) {}

const Block: React.FC = () => {
  const { gestureHandler, translation, state } = panGestureHandler();
  const x = withOffset(translation.x, state);

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
