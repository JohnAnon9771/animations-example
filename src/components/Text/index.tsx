import React from "react";
import { Text } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

interface Props {
  size?: number;
  color?: string;
  font?: "Gilroy-ExtraBold" | "Gilroy-Light";
}

const TextComponent: React.FC<Props> = ({ children, size, color, font }) => {
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
          color,
        }}
      >
        {children}
      </Text>
    );
  }
};

export default TextComponent;
