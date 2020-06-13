import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/StackScreens";

type Props = StackScreenProps<StackParamList, "Tickets">;

export const Tickets: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
