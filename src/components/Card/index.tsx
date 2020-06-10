import React from "react";
import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

import { TextComponent as Text } from "../Text";

import { Block, CardImage, CardText } from "./styles";

interface Props {
  id: number;
  source: ImageSourcePropType;
  color: string;
  label: string;
  subLabel: string;
}

export const Card: React.FC<Props> = ({
  id,
  source,
  color,
  label,
  subLabel,
}) => {
  const navigation = useNavigation();
  const data = { id, source, color, label, subLabel };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { ...data })}
    >
      <CardText>
        <Text
          font="Gilroy-ExtraBold"
          size={18}
          color={color}
          style={{ marginBottom: 5 }}
        >
          {label}
        </Text>
        <Block>
          <EvilIcons name="location" size={24} color={color} />
          <Text size={18} color={color}>
            {subLabel}
          </Text>
        </Block>
      </CardText>
      <CardImage source={source} />
    </TouchableOpacity>
  );
};
