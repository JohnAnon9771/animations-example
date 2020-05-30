import React, { useMemo, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const Icons = {
  Home: "grid",
  Logger: "activity",
  Documents: "folder",
  Settings: "settings",
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const offset = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(offset, {
      toValue: 5,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [offset]);

  const animationText = {
    transform: [
      {
        translateX: offset.interpolate({
          inputRange: [0, 2],
          outputRange: [0, 5],
        }),
      },
    ],
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const Color = useMemo(() => {
          if (isFocused && route.name === "Home") {
            return "#eb9e34";
          } else if (isFocused && route.name !== "Home") {
            return "#6e34eb";
          } else {
            return undefined;
          }
        }, [isFocused]);

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }, [isFocused]);

        const onLongPress = useCallback(() => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        }, []);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <View style={[styles.button]}>
              <Feather name={Icons[route.name]} size={24} color={Color} />
              <Animated.Text style={[{ color: Color }, animationText]}>
                {isFocused ? label : ""}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    elevation: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    flexDirection: "row",
  },
});

export default TabBar;
