import React from "react";
import { Text, View } from "react-native";
import { State, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { panGestureHandler, withSpringTransition } from "react-native-redash";
import { CARD_WIDTH, styles } from "../CardForList";

const {
  concat,
  interpolate,
  Value,
  cond,
  eq,
  add,
  set,
  and,
  greaterThan,
  multiply,
  Clock,
  timing,
  startClock,
  stopClock,
  block,
} = Animated;

function withOffset(
  value: Animated.Value<number>,
  gestureState: Animated.Value<State>,
  offset: Animated.Value<number>
) {
  const safeOffset = new Value(0);
  const clock = new Clock();
  const state = {
    frameTime: new Value(0),
    time: new Value(0),
    position: new Value(0),
    finished: new Value(0),
  };
  const config = {
    toValue: new Value(0),
    easing: Easing.in(Easing.linear),
    duration: 1000,
  };
  return block([
    cond(
      eq(gestureState, State.ACTIVE),
      add(safeOffset, value),
      cond(
        greaterThan(value, multiply(CARD_WIDTH, 0.45)),
        [add(value, CARD_WIDTH + 0.4)],
        set(safeOffset, offset)
      )
    ),
  ]);
}

function deleteCard(
  offset: Animated.Node<number>,
  state: Animated.Value<State>
) {
  return cond(
    and(
      eq(state, State.ACTIVE),
      greaterThan(offset, multiply(CARD_WIDTH, 0.45))
    ),
    interpolate(offset, {
      inputRange: [0, CARD_WIDTH * 0.5],
      outputRange: [0, CARD_WIDTH / 2],
    })
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

  const width = deleteCard(translateX, state);
  return (
    <>
      <Animated.View
        style={{
          width,
          height: add(0, translateX),
          backgroundColor: "red",
          position: "absolute",
          opacity: 0.2,
          borderRadius: 50,
          right: 0,
          zIndex: index,
        }}
      />
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            styles.container,
            {
              position: "absolute",
              zIndex: index,
              elevation: index + 4,
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
    </>
  );
};

export default StackCard;
