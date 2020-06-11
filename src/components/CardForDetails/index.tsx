import React from "react";
import { ImageSourcePropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { opacify } from "polished";
import { FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";

import { TextComponent as Text } from "../Text";

import { color as Color } from "../../theme";

import { Block, BlockText, BlockIcon, CardImage } from "./styles";

interface Props {
  label: "Hotel" | "Tickets" | "Places" | "Temperature";
  source: ImageSourcePropType;
  information?: number;
  color: string;
  icon: "aircraft" | "dot-circle" | "ios-sunny" | "map-marker-alt";
}

export const CardForDetails: React.FC<Props> = ({
  label,
  color,
  source,
  icon,
  information,
}) => {
  const positionText = !information ? { bottom: -64 } : undefined;
  const sizeIcon = 26;

  return (
    <TouchableOpacity onPress={() => {}}>
      <Block>
        <BlockIcon>
          {icon === "dot-circle" || icon === "map-marker-alt" ? (
            <FontAwesome5 name={icon} color={color} size={sizeIcon} />
          ) : icon === "aircraft" ? (
            <Entypo name={icon} color={color} size={sizeIcon} />
          ) : (
            <Ionicons name={icon} color={color} size={sizeIcon} />
          )}
        </BlockIcon>
        <BlockText>
          {information && (
            <Text
              size={46}
              font="Gilroy-ExtraBold"
              color={color}
              style={{ bottom: 10 }}
            >
              {information}
            </Text>
          )}
          <Text
            color={Color.text}
            size={18}
            font="Gilroy-ExtraBold"
            style={positionText}
          >
            {label}
          </Text>
        </BlockText>
        <CardImage
          source={source}
          style={{ backgroundColor: color, opacity: 0.4 }}
        />
      </Block>
    </TouchableOpacity>
  );
};
