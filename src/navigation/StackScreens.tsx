import React, { ReactNode } from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Animated from "react-native-reanimated";

import Home from "../screens/Home";
import Details from "../screens/Details";

const Stack = createStackNavigator<StackParamList>();

export interface Data {
  id: number;
  label: string;
  subLabel: string;
  source: ImageSourcePropType;
}

type StackParamList = {
  Home: undefined;
  Details: Data;
};

interface Props {
  style: StyleProp<ReactNode>;
}

export const Screens: React.FC<Props> = ({ style }) => {
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: "#000",
        },
        style,
      ]}
    >
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "#fff" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </Animated.View>
  );
};
