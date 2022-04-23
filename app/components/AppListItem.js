import React from "react";

import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppListItem({
  backgroundColor,
  color,
  icon,
  iconSize,
  onPress,
  style,
  text,
}) {
  return (
    <TouchableOpacity onPress={onPress} underlayColor={AppColors.accentColor}>
      <View style={[styles.container, style, { backgroundColor }]}>
        <MaterialCommunityIcons name={icon} size={iconSize} color={color} />
        <AppText style={{ color: color }}>{text}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default AppListItem;
