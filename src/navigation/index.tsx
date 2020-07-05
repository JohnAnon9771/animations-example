import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Button from "../screens/Button";
import Cards from "../screens/Cards";
import Cards2 from "../screens/Cards2";
import List from "../screens/Flatlist";
import Block from "../screens/Block";
import Books from "../screens/Books";
import TransitionLayout from "../screens/TransitionLayout";

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Button">
      <Drawer.Screen name="Button" component={Button} />
      <Drawer.Screen name="Cards" component={Cards} />
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="Cards2" component={Cards2} />
      <Drawer.Screen name="Block" component={Block} />
      <Drawer.Screen name="Books" component={Books} />
      <Drawer.Screen name="TransitionLayout" component={TransitionLayout} />
    </Drawer.Navigator>
  );
};

export default Routes;
