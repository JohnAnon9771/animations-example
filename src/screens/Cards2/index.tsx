import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { panGestureHandler, withSpringTransition } from "react-native-redash";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import { styles, CARD_WIDTH } from "../../components/CardForList";

const { concat, interpolate, Value, useCode, cond, eq, add, set } = Animated;

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

const Card2: React.FC = () => {
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
      outputRange: [0, 20],
    }),
    "deg"
  );
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateX, translateY }, { rotate }] },
          ]}
        >
          <Text>Hello world!</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card2;
