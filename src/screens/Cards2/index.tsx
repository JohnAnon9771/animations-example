import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { panGestureHandler } from "react-native-redash";
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

  // const rotate = concat(
  //   translation.x.interpolate({
  //     inputRange: [0, CARD_WIDTH * 0.2],
  //     outputRange: [0, 40],
  //   }),
  //   "deg"
  // );
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            styles.container,
            { transform: [{ translateX: x, translateY: y }] },
          ]}
        >
          <Text>Hello world!</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card2;
