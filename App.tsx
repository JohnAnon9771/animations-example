import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { spring } from "react-native-redash";

export default function App() {
  const { Value, useCode, set } = Animated;
  const y = new Value(0);
  useCode(
    () => set(y, spring({ to: y, from: 50, config: { damping: 10 } })),
    []
  );
  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: { translateY: y } }}>
        <View style={styles.ball} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});
