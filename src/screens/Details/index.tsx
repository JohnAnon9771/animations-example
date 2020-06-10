import React from "react";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { TextComponent as Text } from "../../components/Text";
import { StackScreenProps } from "@react-navigation/stack";

import { color } from "../../theme";

import { Data } from "../../navigation/index";

import { Block, BlockText, BlockStar, GoBack, CardImage } from "./styles";

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
      <GoBack>
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={28} color={color.icons} />
        </TouchableNativeFeedback>
      </GoBack>
      <CardImage source={source} />
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
      </Block>
    </>
  );
};

export default Details;
