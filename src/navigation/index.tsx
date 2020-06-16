import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Logger from "../screens/Logger";
import Documents from "../screens/Documents";
import Settings from "../screens/Settings";

import MyTabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Logger" component={Logger} />
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Routes;
