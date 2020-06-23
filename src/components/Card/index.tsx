import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { Card } from "../../screens/Cards";

export const CARD_COLUMNS = 2;
export const CARD_SIZE = Dimensions.get("window").width / CARD_COLUMNS;

const styles = StyleSheet.create({
  container: { width: CARD_SIZE, height: CARD_SIZE },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 16,
    margin: 16,
  },
});

export interface Props {
  card: Card;
}

export default ({ card: { thumbnail } }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.image} />
    </View>
  );
};
