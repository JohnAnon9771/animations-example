import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { panGestureHandler, withSpringTransition } from "react-native-redash";
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

const {
  Value,
  cond,
  eq,
  add,
  set,
  // Clock,
  // divide,
  // diff,
  // startClock,
  // stopClock,
  // lessThan,
  // abs,
  // multiply,
  // greaterThan,
} = Animated;

// const VELOCITY_THRESHOLD = 0.5;
// const POSITION_THRESHOLD = 0.5;
// const VELOCITY = 50;

// function force(
//   dt: Animated.Node<number>,
//   position: Animated.Value<number>,
//   velocity: Animated.Value<number>
// ) {
//   return set(
//     velocity,
//     cond(
//       lessThan(position, -POSITION_THRESHOLD),
//       VELOCITY,
//       cond(greaterThan(position, POSITION_THRESHOLD), -VELOCITY, 0)
//     )
//   );
// }

// function interaction(
//   translation: Animated.Value<number>,
//   state: Animated.Value<State>,
//   velocity: Animated.Value<number>
// ) {
//   const start = new Value(0);
//   const dragging = new Value(0);
//   const position = new Value(0);

//   const clock = new Clock();
//   const dt = divide(diff(clock), 1000);

//   return cond(
//     eq(state, State.ACTIVE),
//     [
//       cond(eq(dragging, 0), [set(dragging, 1), set(start, position)]),
//       set(position, add(start, translation)),
//       dt,
//       set(position, add(start, translation)),
//     ],
//     [
//       set(dragging, 0),
//       startClock(clock),
//       force(dt, position, velocity),
//       cond(lessThan(abs(velocity), VELOCITY_THRESHOLD), stopClock(clock)),
//       set(position, add(position, multiply(velocity, dt))),
//     ]
//   );
// }

function withOffset(
  value: Animated.Value<number>,
  state: Animated.Value<State>,
  offset: Animated.Value<number>
) {
  const safeOffset = new Value(0);
  return cond(
    eq(state, State.ACTIVE),
    add(safeOffset, value),
    set(safeOffset, offset)
  );
}

const Block: React.FC = () => {
  const { gestureHandler, translation, state, velocity } = panGestureHandler();
  const offsetX = new Value(0);
  const x = withOffset(translation.x, state, offsetX);
  const translateX = withSpringTransition(x, {}, velocity.x, state);

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.block, { transform: [{ translateX }] }]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Block;
