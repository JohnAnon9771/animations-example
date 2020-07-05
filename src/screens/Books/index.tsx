import React from "react";
import { View, Text, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import {
  FlatList,
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import {
  onScrollEvent,
  panGestureHandler,
  withSpringTransition,
} from "react-native-redash";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 4;

const {
  Value,
  eq,
  cond,
  set,
  interpolate,
  concat,
  Extrapolate,
  useCode,
  add,
  createAnimatedComponent,
} = Animated;

const AnimatedFlatList = createAnimatedComponent(FlatList);

const books = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Books: React.FC = () => {
  const { gestureHandler, translation, state } = panGestureHandler();
  const offsetX = withSpringTransition(translation.x, {}, state);
  const rotateX = new Value(0);
  const rotate = concat(rotateX, "deg");

  useCode(
    () =>
      cond(
        eq(state, State.ACTIVE),
        add(
          rotateX,
          interpolate(offsetX, {
            inputRange: [0, CARD_WIDTH * 4],
            outputRange: [0, 45],
          })
        )
      ),
    []
  );

  return ( 
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ margin: 5 }}
      >
        {books.map((item) => (
          <PanGestureHandler {...gestureHandler}>
            <Animated.View
              style={{
                width: CARD_WIDTH,
                height: 150,
                borderRadius: 5,
                elevation: 5,
                margin: 10,
                backgroundColor: "#fff",
                transform: [{ perspective: 40 }],
              }}
            />
          </PanGestureHandler>
        ))}
      </ScrollView>
    </View>
  );
};

export default Books;
