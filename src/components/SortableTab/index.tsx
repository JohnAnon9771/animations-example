import React from "react";
import Animated, { Value } from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  panGestureHandler,
  withSpringTransition,
  moving,
} from "react-native-redash";
import Card, { CARD_SIZE, Props as CardProps } from "../Card";

interface SortableCardProps extends CardProps {
  index: number;
  offsets: { x: Animated.Value<number>; y: Animated.Value<number> }[];
}

const {
  cond,
  eq,
  useCode,
  block,
  set,
  and,
  multiply,
  divide,
  round,
  add,
} = Animated;

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

const SortableTab: React.FC<SortableCardProps> = ({ index, offsets, card }) => {
  const { gestureHandler, state, translation, velocity } = panGestureHandler();
  const currentOffset = offsets[index];
  const x = withOffset(translation.x, state, currentOffset.x);
  const y = withOffset(translation.y, state, currentOffset.y);
  const offsetX = multiply(round(divide(x, CARD_SIZE)), CARD_SIZE);
  const offsetY = multiply(round(divide(y, CARD_SIZE)), CARD_SIZE);
  const translateX = withSpringTransition(x, {}, velocity.x, state);
  const translateY = withSpringTransition(y, {}, velocity.y, state);
  const zIndex = cond(eq(state, State.ACTIVE), 200, cond(moving(y), 100, 1));

  useCode(
    () =>
      block(
        offsets.map((offset) =>
          cond(
            and(
              eq(state, State.ACTIVE),
              eq(offsetX, offset.x),
              eq(offsetY, offset.y)
            ),
            [
              set(offset.x, currentOffset.x),
              set(offset.y, currentOffset.y),
              set(currentOffset.x, offsetX),
              set(currentOffset.y, offsetY),
            ]
          )
        )
      ),
    [currentOffset.x, currentOffset.y, offsetX, offsetY, offsets, state]
  );

  return (
    <PanGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: CARD_SIZE,
          height: CARD_SIZE,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX }, { translateY }],
          zIndex,
        }}
      >
        <Card {...{ card }} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SortableTab;
