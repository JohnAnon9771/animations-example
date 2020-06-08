import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { EvilIcons } from "@expo/vector-icons";

import Text from "../../components/Text";

import { color } from "../../theme";
import { Container, Menu, Header, Photo, Block } from "./styles";

import menu from "../../assets/icons/menu.png";
import photo from "../../assets/photo.png";

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Menu source={menu} style={{ tintColor: color.icons }} />
        </TouchableOpacity>
        <Block>
          <EvilIcons name="location" size={24} color={color.icons} />
          <Text color={color.text}>
            <Text font="Gilroy-ExtraBold">Los Angeles</Text>, California
          </Text>
          <Photo source={photo} />
        </Block>
      </Header>

      <Text color={color.text} size={32}>
        Hi <Text font="Gilroy-ExtraBold">João,</Text>
      </Text>
      <Text color={color.text}>Let's Discover a New Adventure!</Text>
    </Container>
  );
};

export default Home;
