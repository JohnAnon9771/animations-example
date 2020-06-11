import React from "react";
import { StatusBar } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { StackScreenProps } from "@react-navigation/stack";
import { Data } from "../../navigation/StackScreens";

import { TextComponent as Text } from "../../components/Text";
import { CardForDetails } from "../../components/CardForDetails";

import { color } from "../../theme";

import sky from "../../assets/sky.jpg";
import map from "../../assets/map.png";
import place from "../../assets/place.png";
import sky2 from "../../assets/sky.jpg";

import {
  Block,
  BlockText,
  BlockStar,
  BlockCard,
  GoBack,
  CardImage,
  Container,
} from "./styles";

type ParamList = {
  Home: undefined;
  Details: Data;
};

type Props = StackScreenProps<ParamList, "Details">;

const Details: React.FC<Props> = ({ route, navigation }) => {
  const { id, source, label, subLabel } = route.params;
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <GoBack onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={28} color={color.icons} />
      </GoBack>
      <CardImage source={source} />
      <Container>
        <Block>
          <BlockText>
            <Text font="Gilroy-ExtraBold" size={32} color={color.text}>
              {label}
            </Text>
            <Text size={32} color={color.text}>
              , {subLabel}
            </Text>
          </BlockText>
          <BlockStar>
            <AntDesign name="star" size={24} color={color.icons} />
            <Text style={{ marginLeft: 5 }} color={color.text} size={16}>
              4.7
            </Text>
          </BlockStar>
          <BlockCard>
            <CardForDetails
              source={sky}
              color={color.secondary}
              icon="aircraft"
              label="Tickets"
              information={2}
            />
            <CardForDetails
              source={map}
              color={color.icons}
              icon="dot-circle"
              label="Hotel"
            />
          </BlockCard>
          <BlockCard>
            <CardForDetails
              source={place}
              color={color.primary}
              icon="map-marker-alt"
              label="Places"
              information={16}
            />
            <CardForDetails
              source={sky2}
              color={color.orange}
              icon="ios-sunny"
              label="Temperature"
              information={21}
            />
          </BlockCard>
        </Block>
      </Container>
    </>
  );
};

export default Details;
