import React from "react";
import { View } from "react-native";
import { onScrollEvent } from "react-native-redash";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";
import Constants from "expo-constants";

import CardForList from "../../components/CardForList";

const { Value, createAnimatedComponent } = Animated;

const AnimatedFlatlist = createAnimatedComponent(FlatList);

const List: React.FC = () => {
  const y = new Value(0);
  const onScroll = onScrollEvent({ y });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: Constants.statusBarHeight + 34,
      }}
    >
      <AnimatedFlatlist
        {...{ onScroll }}
        scrollEventThrottle={16}
        data={[1, 2, 3, 4, 5, 6]}
        showsVerticalScrollIndicator={false}
        renderItem={({ index }) => <CardForList {...{ index, y }} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default List;
