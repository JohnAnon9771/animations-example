import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, size, color }) => {
    //     let iconName;

    //     if (route.name === "home") {
    //       iconName = focused
    //         ? "ios-information-circle"
    //         : "ios-information-circle-outline";
    //     } else if (route.name === "logger") {
    //       iconName = focused ? "ios-list-box" : "ios-list";
    //     }

    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="logger" component={Home} />
      <Tab.Screen name="documents" component={Home} />
      <Tab.Screen name="profile" component={Home} />
    </Tab.Navigator>
  );
};

export default Routes;
