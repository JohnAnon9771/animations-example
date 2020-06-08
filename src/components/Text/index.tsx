import React from "react";
import { Text, FontVariant, StyleProp, TextStyle } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

interface Props {
  size?: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  color?: string;
  font?: "Gilroy-ExtraBold" | "Gilroy-Light";
}

const TextComponent: React.FC<Props> = ({
  children,
  size,
  color,
  fontWeight,
  font,
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
        style={{
          fontFamily: !font ? "Gilroy-Light" : font,
          fontSize: size,
          fontWeight,
          color,
        }}
      >
        {children}
      </Text>
    );
  }
};

export default TextComponent;
