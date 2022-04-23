import React from "react";

import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({
  backgroundColor,
  borderRadius,
  iconColor,
  name,
  size,
  style,
}) {
  return (
    <View
      style={[
        {
          alignItems: "center",
          borderRadius: borderRadius,
          backgroundColor,
          height: size,
          justifyContent: "center",
          width: size,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size * 0.6} color={iconColor} />
    </View>
  );
}

export default AppIcon;
