import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export const CARD_HEIGHT = Dimensions.get("window").height / 4;
export const CARD_WIDTH = Dimensions.get("window").width * 0.8;

const styles = StyleSheet.create({
  container: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});

const CardForList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
};

export default CardForList;
