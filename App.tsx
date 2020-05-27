import React, { useState, useCallback, useMemo } from "react";
import { AntDesign } from "@expo/vector-icons";
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
      friction: 3,
    }).start();
    open = !open;
    console.log(toValue);
  }, []);

  const animation = {
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
        <Animated.View style={[styles.subButton, animation]}>
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
    bottom: 10,
  },
  subButton: {
    width: 40,
    height: 40,
    marginRight: 5,
    // position: "absolute",
    elevation: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    bottom: 20,
  },
});
