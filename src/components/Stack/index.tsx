import React from "react";
import { Text } from "react-native";
import { State, PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { panGestureHandler, withSpringTransition } from "react-native-redash";
import { CARD_WIDTH, styles } from "../CardForList";

const { concat, interpolate, Value, cond, eq, add, set } = Animated;

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

interface Props {
  index: number;
}

const StackCard: React.FC<Props> = ({ index }) => {
  const { gestureHandler, state, translation, velocity } = panGestureHandler();
  const offsetX = new Value(0);
  const offsetY = new Value(0);

  const x = withOffset(translation.x, state, offsetX);
  const y = withOffset(translation.y, state, offsetY);

  const translateX = withSpringTransition(x, {}, velocity.x, state);
  const translateY = withSpringTransition(y, {}, velocity.y, state);

  const rotate = concat(
    interpolate(x, {
      inputRange: [0, CARD_WIDTH * 0.2],
      outputRange: [0, 10],
    }),
    "deg"
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={[
          styles.container,
          {
            position: "absolute",
            zIndex: index,
            elevation: add(4, index),
            transform: [
              { translateX, translateY: add(translateY, index * -10) },
              { rotate },
            ],
          },
        ]}
      >
        <Text>Hello world! {index}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default StackCard;
