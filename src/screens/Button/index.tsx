import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";

const ButtonScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          position: "absolute",
        }}
      >
        <Button
          backgroundColor="rgba(255, 90, 0, 0.5)"
          color="rgb(255, 90, 0)"
          label="Home"
          icon="grid"
          fixed
        />
        <Button
          backgroundColor="rgba(255, 90, 0, 0.5)"
          color="rgb(255, 90, 0)"
          label="Home"
          icon="grid"
        />
        <Button
          backgroundColor="rgba(255, 90, 0, 0.5)"
          color="rgb(255, 90, 0)"
          label="Home"
          icon="grid"
        />
        <Button
          backgroundColor="rgba(255, 90, 0, 0.5)"
          color="rgb(255, 90, 0)"
          label="Documents"
          icon="grid"
        />
        <Button
          backgroundColor="rgba(255, 90, 0, 0.5)"
          color="rgb(255, 90, 0)"
          label="Home"
          icon="grid"
        />
      </View>
    </View>
  );
};

export default ButtonScreen;
