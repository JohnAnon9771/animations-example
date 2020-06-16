import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

import { Entypo } from "@expo/vector-icons";

const {
  event,
  Value,
  Clock,
  block,
  cond,
  eq,
  set,
  interpolate,
  timing,
  startClock,
  stopClock,
  add,
  and,
} = Animated;

function runAnimationTiming(
  clock: Animated.Clock,
  gestureState: Animated.Value<number>
) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 300,
    toValue: new Value(-1),
    easing: Easing.in(Easing.ease),
  };
  return block([
    cond(and(eq(gestureState, State.BEGAN), eq(state.position, 0)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(config.toValue, 1),
      startClock(clock),
    ]),
    cond(and(eq(gestureState, State.BEGAN), eq(state.position, 1)), [
      set(state.finished, 0),
      set(state.position, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(config.toValue, 0),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    interpolate(state.position, {
      inputRange: [0, 1],
      outputRange: [0, 60],
    }),
  ]);
}

const Button: React.FC = () => {
  const gestureState = new Value(-1);
  const clock = new Clock();
  const onStateChange = event([
    {
      nativeEvent: { state: gestureState },
    },
  ]);
  const animation = runAnimationTiming(clock, gestureState);
  return (
    <View>
      <TapGestureHandler onHandlerStateChange={onStateChange}>
        <Animated.View
          style={[
            {
              backgroundColor: "#7159c1",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              height: 40,
              overflow: "hidden",
              width: add(40, animation),
            },
            // StyleSheet.absoluteFill,
          ]}
        >
          <Entypo
            name="grid"
            size={32}
            color="#fff"
            style={[StyleSheet.absoluteFill, { margin: 4 }]}
          />
          <Text
            style={{
              fontSize: 15,
              position: "absolute",
              color: "#fff",
              left: 40,
            }}
          >
            Home
          </Text>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default Button;
