import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
