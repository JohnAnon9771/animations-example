import React from "react";
import { View, Text } from "react-native";
import Card from "../../components/Card";

const Cards: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card />
    </View>
  );
};

export default Cards;
