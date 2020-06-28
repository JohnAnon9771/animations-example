import React from "react";
import { View } from "react-native";
import StackCard from "../../components/Stack";

const arrayCard = [1, 2, 3];

const Card2: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {arrayCard.map((index) => (
        <StackCard key={index} {...{ index }} />
      ))}
    </View>
  );
};

export default Card2;
