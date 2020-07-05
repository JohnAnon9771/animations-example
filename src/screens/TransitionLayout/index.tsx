import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Animated from "react-native-reanimated";
import { timing, withSpringTransition } from "react-native-redash";

const {
  set,
  interpolate,
  add,
  Clock,
  clockRunning,
  startClock,
  cond,
} = Animated;

const TransitionLayout: React.FC = () => {
  const clock = new Clock();
  // const y = withSpringTransition();
  return (
    <View style={styles.centerAll}>
      <View
      // style={[styles.main, { transform: [{ translateY: y }] }]}
      // onLayout={({ nativeEvent }) => {
      //   cond(clockRunning(clock), 0, [
      //     startClock(clock),
      //     add(nativeEvent.layout.y, y),
      //   ]);
      // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    marginTop: 100,
    justifyContent: "flex-end",
  },
  main: {
    marginTop: 30,
    height: "75%",
    width: "100%",
    elevation: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: "#aaa",
  },
});

export default TransitionLayout;
