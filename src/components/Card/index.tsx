import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { Value } from "react-native-reanimated";
import { useGestureHandler, useValue, mix } from "react-native-redash";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 270,
    padding: 10,
  },
});

const Card: React.FC = () => {
  const state = new Value(State.UNDETERMINED);
  const offsetX = new Value(0);
  const offsetY = new Value(0);
  const onGestureHandler = useGestureHandler({
    state,
    translationX: offsetX,
    translationY: offsetY,
    anchorX: 0,
    force: 20,
  });
  return (
    <PanGestureHandler {...onGestureHandler}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateX: offsetX }, { translateY: offsetY }] },
        ]}
      >
        <Text>Website Home Page Redesign</Text>
        <Text>07-03-2020</Text>
        <Text>
          Is is a kind of web design that allows users to access and view
          website compatible with the device they are using...{" "}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Card;
