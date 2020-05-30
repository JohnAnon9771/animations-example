import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";

import TabBar from "./components/TabBar";

import Home from "./screens/Home";
import Logger from "./screens/Logger";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Logger" component={Logger} />
      <Tab.Screen name="Documents" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

export default Routes;
