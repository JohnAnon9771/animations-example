import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

interface Props {
  size?: number;
  color?: string;
  font?: "Gilroy-ExtraBold" | "Gilroy-Light";
  style?: StyleProp<TextStyle>;
}

export const TextComponent: React.FC<Props> = ({
  children,
  size,
  color,
  font,
  style,
}) => {
  const [isLoaded] = useFonts({
    "Gilroy-ExtraBold": require("../../assets/fonts/Gilroy-ExtraBold.otf"),
    "Gilroy-Light": require("../../assets/fonts/Gilroy-Light.otf"),
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Text
        style={[
          {
            fontFamily: !font ? "Gilroy-Light" : font,
            fontSize: size,
            color,
          },
          style,
        ]}
      >
        {children}
      </Text>
    );
  }
};
