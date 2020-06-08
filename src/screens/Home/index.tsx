import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { EvilIcons, Ionicons } from "@expo/vector-icons";

import { TextComponent as Text } from "../../components/Text";
import { Category } from "../../components/Category";
import { Filter } from "../../components/Filter";

import { color } from "../../theme";

import {
  Container,
  Menu,
  Header,
  Photo,
  Block,
  BlockText,
  BlockCategory,
  BlockFilter,
  Search,
  Input,
} from "./styles";

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
      <BlockText>
        <Text color={color.text} size={32} style={{ marginBottom: 10 }}>
          Hi <Text font="Gilroy-ExtraBold">João,</Text>
        </Text>
        <Text color={color.text}>Let's Discover a New Adventure!</Text>
      </BlockText>
      <Search>
        <EvilIcons name="search" size={32} color={color.primary} />
        <Input placeholder="Search Hotels, Taxi, etc..." numberOfLines={1} />
        <Ionicons name="ios-arrow-down" size={20} color={"#999"} />
      </Search>
      <BlockCategory>
        <Category
          backgroundColor={color.secondary}
          color={color.text}
          label="Flights"
          icon="aircraft"
        />
        <Category
          backgroundColor={color.orangeLight}
          color={color.text}
          label="Hotels"
          icon="hotel"
        />
        <Category
          backgroundColor={color.primary}
          color={color.text}
          label="Places"
          icon="place"
        />
        <Category
          backgroundColor={color.orange}
          color={color.text}
          label="Home"
          icon="grid"
        />
      </BlockCategory>
      <BlockText>
        <Text color={color.text} size={32}>
          Your <Text font="Gilroy-ExtraBold">Trips</Text>
        </Text>
      </BlockText>
      <BlockFilter>
        <Filter color={color.primary} label="Futured" isFocused />
        <Filter color={color.primary} label="Past" />
        <Filter color={color.primary} label="All" />
      </BlockFilter>
    </Container>
  );
};

export default Home;
