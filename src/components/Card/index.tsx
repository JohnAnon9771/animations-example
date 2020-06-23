import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import { Tab } from "../../screens/Cards";

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get("window").width / TAB_COLUMNS;

const styles = StyleSheet.create({
  container: { width: TAB_SIZE, height: TAB_SIZE },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 16,
    margin: 16,
  },
});

interface Props {
  tab: Tab;
}

const Card: React.FC<Props> = ({ tab: { thumbnail } }) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.image} />
    </View>
  );
};

export default Card;
