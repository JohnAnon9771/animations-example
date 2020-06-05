import React from "react";
import { StyleSheet } from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing, T } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    backgroundColor: "rgba(113, 89, 193, 0.4)",
    zIndex: 5,
  },
  text: {
    position: "absolute",

    color: "#7159c1",
    fontSize: 18,
  },
});

const {
  event,
  Value,
  createAnimatedComponent,
  cond,
  eq,
  block,
  and,
  neq,
  set,
  spring,
  SpringUtils,
  Clock,
  startClock,
  stopClock,
  Extrapolate,
  interpolate,
  timing,
} = Animated;
const AnimatedFeather = createAnimatedComponent(Feather);

interface Params {
  clock: Animated.Clock;
  gestureState: Animated.Value<number>;
}

function runAnimationTiming({ clock, gestureState }: Params) {
  const config = {
    duration: 600,
    toValue: new Value(0),
    easing: Easing.in(Easing.bounce),
  };

  const state = {
    time: new Value(0),
    finished: new Value(0),
    frameTime: new Value(0),
    position: new Value(0),
  };

  return block([
    cond(and(eq(gestureState, State.BEGAN), neq(config.toValue, 1)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(config.toValue, 2),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    interpolate(state.position, {
      inputRange: [0, 2],
      outputRange: [0, -52],
    }),
  ]);
}

export default function App() {
  const gestureState = new Value(-1);
  const clock = new Clock();
  const onStateChange = event([
    {
      nativeEvent: { state: gestureState },
    },
  ]);

  const translateX = runAnimationTiming({ clock, gestureState });
  return (
    <TapGestureHandler onHandlerStateChange={onStateChange}>
      <Animated.View style={styles.container}>
        <Animated.View style={[styles.button, { width: translateX }]}>
          <Animated.View style={[styles.icon, { transform: [{ translateX }] }]}>
            <AnimatedFeather name="grid" color="#7159c1" size={32} />
          </Animated.View>
          <Animated.Text style={styles.text}>Home</Animated.Text>
        </Animated.View>
      </Animated.View>
    </TapGestureHandler>
  );
}
