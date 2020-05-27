import React, { useState, useCallback, useMemo } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const offset = new Animated.Value(0);
  let open: number | boolean;

  const toggle = useCallback(() => {
    const toValue = open ? 0 : 1;
    Animated.spring(offset, {
      toValue,
      friction: 5,
    }).start();
    open = !open;
    console.log(toValue);
  }, []);

  const sendAnimation = {
    transform: [
      { scale: offset },
      {
        translateY: offset.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -139],
        }),
      },
    ],
  };

  const questionAnimation = {
    transform: [
      { scale: offset },
      {
        translateY: offset.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -95],
        }),
      },
    ],
  };
  const heartAnimation = {
    transform: [
      { scale: offset },
      {
        translateY: offset.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50],
        }),
      },
    ],
  };
  const rotation = {
    transform: [
      {
        rotate: offset.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.subButton, styles.subMenu, sendAnimation]}
        >
          <FontAwesome name="send" size={22} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.subButton, styles.subMenu, questionAnimation]}
        >
          <AntDesign name="question" size={24} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[styles.subButton, styles.subMenu, heartAnimation]}
        >
          <AntDesign name="hearto" size={24} color="#000" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggle()}>
        <Animated.View style={[styles.button, rotation]}>
          <AntDesign name="plus" size={32} color="#fff" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 20,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    position: "absolute",
    elevation: 7,
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 50,
  },
  subMenu: {
    position: "absolute",
    right: 5,
  },
  subButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    elevation: 6,
    backgroundColor: "#fff",
    borderRadius: 50,
    bottom: 10,
  },
});
