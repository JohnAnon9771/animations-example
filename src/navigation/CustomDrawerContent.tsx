import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
  ...props
}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate("Home")} />
    </DrawerContentScrollView>
  );
};
