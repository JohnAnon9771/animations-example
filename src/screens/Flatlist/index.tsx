import React from "react";
import { View, Text, FlatList } from "react-native";
import Constants from "expo-constants";
import CardForList from "../../components/CardForList";

const List: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: Constants.statusBarHeight + 34,
      }}
    >
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        showsVerticalScrollIndicator={false}
        renderItem={({}) => <CardForList />}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default List;
