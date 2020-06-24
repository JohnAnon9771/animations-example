import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Button from "../screens/Button";
import Cards from "../screens/Cards";
import Documents from "../screens/Cards";
import List from "../screens/Flatlist";

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Button">
      <Drawer.Screen name="Button" component={Button} />
      <Drawer.Screen name="Cards" component={Cards} />
      <Drawer.Screen name="List" component={List} />
      {/* <Drawer.Screen name="Documents" component={Documents} /> */}
    </Drawer.Navigator>
  );
};

export default Routes;
