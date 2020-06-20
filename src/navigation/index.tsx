import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Button from "../screens/Button";
import Cards from "../screens/Cards";
import Documents from "../screens/Cards";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Button">
      <Drawer.Screen name="Button" component={Button} />
      <Drawer.Screen name="Cards" component={Cards} />
      {/* <Drawer.Screen name="Documents" component={Documents} />
      <Drawer.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
  );
};

export default Routes;
