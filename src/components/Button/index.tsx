import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";

import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { withSpring, withSpringTransition } from "react-native-redash";

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

  const absoluteFill = fixed ? { position: "absolute" } : null;
  const focused = isFocused ? backgroundColor : "transparent";
  let Icon = definitionOfIcon(icon, color);
  const animation = cond(eq(gestureState, State.BEGAN), label.length);
  const width = interpolate(animation, {
    inputRange: [0, label.length],
    outputRange: [35, label.length * 0.5],
  });
  const x = withSpringTransition(width, {}, gestureState);

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
            height: 35,
            overflow: "hidden",
            margin: 5,
            width: x,
          },
          fixed ? { position: "absolute" } : null,
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
