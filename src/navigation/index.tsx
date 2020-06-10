import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Animated from "react-native-reanimated";

import Home from "../screens/Home";
import Details from "../screens/Details";
import { ImageSourcePropType } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<StackParamList>();

const { Value, interpolate } = Animated;

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

const Screens: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
  ...props
}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = useState(new Value<number>(0));

  const scale = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

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
        {(props) => (
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: "#000",
              transform: [{ scale }],
              borderRadius,
            }}
          >
            <Screens {...props} />
          </Animated.View>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
