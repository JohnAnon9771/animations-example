import React from "react";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  panGestureHandler,
  withOffset,
  withSpringTransition,
} from "react-native-redash";
import Card, { CARD_SIZE, Props as CardProps } from "../Card";

interface SortableCardProps extends CardProps {
  index: number;
  offsets: { x: Animated.Value<number>; y: Animated.Value<number> }[];
}

const { cond, eq, useCode } = Animated;

const SortableTab: React.FC<SortableCardProps> = ({ index, offsets, card }) => {
  const { gestureHandler, state, translation, velocity } = panGestureHandler();
  const currentOffset = offsets[index];
  const x = withOffset(translation.x, state, currentOffset.x);
  const y = withOffset(translation.y, state, currentOffset.y);
  const translateX = withSpringTransition(x, {}, velocity.x, state);
  const translateY = withSpringTransition(y, {}, velocity.y, state);

  const zIndex = cond(eq(state, State.ACTIVE), 10, 1);
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
          transform: [{ translateX: x }, { translateY: y }],
          zIndex,
        }}
      >
        <Card {...{ card }} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SortableTab;
