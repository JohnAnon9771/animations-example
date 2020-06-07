import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { EvilIcons } from "@expo/vector-icons";

import { Container, Menu, Header } from "./styles";

import menu from "../../assets/icons/menu.png";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Menu source={menu} />
        </TouchableOpacity>
        <EvilIcons name="location" size={24} color="#7159c1" />
      </Header>
    </Container>
  );
}
