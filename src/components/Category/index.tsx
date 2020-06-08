import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { TextComponent as Text } from "../Text";

import { Block, Box } from "./styles";

interface Props {
  label: string;
  icon: "aircraft" | "hotel" | "place" | "grid";
  backgroundColor: string;
  color: string;
}

export const Category: React.FC<Props> = ({
  label,
  icon,
  backgroundColor,
  color,
}) => {
  return (
    <Block>
      <Box
        style={{
          backgroundColor,
          shadowColor: backgroundColor,
          shadowOpacity: 1,
          shadowRadius: 19.0,

          elevation: 12,
        }}
      >
        {icon === "aircraft" || icon === "grid" ? (
          <Entypo name={icon} size={24} color={"#fff"} />
        ) : (
          <MaterialIcons name={icon} size={24} color={"#fff"} />
        )}
      </Box>
      <Text font="Gilroy-ExtraBold" color={color}>
        {label}
      </Text>
    </Block>
  );
};
