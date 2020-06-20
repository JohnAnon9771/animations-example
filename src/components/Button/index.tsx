import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
  multiply,
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
    // cond(eq(state.finished, 1), [
    //   set(state.finished, 0),
    //   set(state.position, 0),
    //   set(state.time, 0),
    //   set(state.frameTime, 0),
    //   set(config.toValue, 0),
    //   startClock(clock),
    // ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    interpolate(state.position, {
      inputRange: [0, 1],
      outputRange: [0, 60],
    }),
  ]);
}

function definitionOfIcon(icon: string, color: string) {
  let Icon: JSX.Element;
  if (icon === "folder" || icon === "activity") {
    Icon = (
      <Feather
        name={icon}
        color={color}
        size={25}
        style={[StyleSheet.absoluteFill, { margin: 4 }]}
      />
    );
  } else if (icon === "setting") {
    Icon = (
      <AntDesign
        name={icon}
        color={color}
        size={25}
        style={[StyleSheet.absoluteFill, { margin: 4 }]}
      />
    );
  } else {
    Icon = (
      <Entypo
        name={icon}
        color={color}
        size={28}
        style={[StyleSheet.absoluteFill, { margin: 4 }]}
      />
    );
  }
  return Icon;
}

interface Props {
  icon: "grid" | "folder" | "activity" | "setting";
  isFocused?: boolean;
  color: string;
  fixed?: boolean;
  backgroundColor: string;
  label: string;
}

const Button: React.FC<Props> = ({
  icon,
  isFocused,
  color,
  fixed,
  backgroundColor,
  label,
}) => {
  const gestureState = new Value(-1);
  const clock = new Clock();
  const onStateChange = event([
    {
      nativeEvent: { state: gestureState },
    },
  ]);
  const animation = runAnimationTiming(clock, gestureState);

  const absoluteFill = fixed ? StyleSheet.absoluteFillObject : null;
  const focused = isFocused ? backgroundColor : "transparent";
  let Icon = definitionOfIcon(icon, color);

  return (
    <TapGestureHandler onHandlerStateChange={onStateChange}>
      <Animated.View
        style={[
          {
            backgroundColor,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            height: 40,
            overflow: "hidden",
            margin: 5,
            width: add(40, animation),
          },
          absoluteFill,
        ]}
      >
        {Icon}
        <Text
          style={{
            fontSize: 15,
            position: "absolute",
            color: color,
            left: 40,
          }}
        >
          {label}
        </Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default Button;
