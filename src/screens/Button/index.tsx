import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";

const ButtonScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        backgroundColor="rgba(255, 90, 0, 0.5)"
        color="rgb(255, 90, 0)"
        label="Home"
        icon="grid"
      />
    </View>
  );
};

export default ButtonScreen;
