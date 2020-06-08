import React from "react";

import { TextComponent as Text } from "../Text";

import { Block, Dot } from "./styles";

interface Props {
  label: string;
  isFocused?: boolean;
  color: string;
}

export const Filter: React.FC<Props> = ({ isFocused, label, color }) => {
  return (
    <Block>
      <Text size={16} color={color} style={!isFocused && { opacity: 0.5 }}>
        {label}
      </Text>
      {isFocused && <Dot style={{ backgroundColor: color }} />}
    </Block>
  );
};
