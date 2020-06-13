import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";

import { CustomDrawerContent } from "./CustomDrawerContent";
import { Screens } from "./StackScreens";

const Drawer = createDrawerNavigator();

const { Value, interpolate } = Animated;

function executeAnimations(progress: Animated.Value<number>) {
  const scale = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const animation = {
    borderRadius,
    transform: [{ scale }],
  };
  return animation;
}

export default () => {
  const [progress, setProgress] = useState(new Value<number>(0));
  const animation = executeAnimations(progress);

  return (
    <Drawer.Navigator
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      overlayColor="transparent"
      drawerType="slide"
      drawerContent={(props) => {
        setProgress(props.progress);
        return <CustomDrawerContent {...props} />;
      }}
    >
      <Drawer.Screen name="Screens">
        {(props) => <Screens {...props} style={animation} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
