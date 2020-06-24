import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../../components/CardForList";

const Card2: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <Text>Hello world!</Text>
      </View>
    </View>
  );
};

export default Card2;
