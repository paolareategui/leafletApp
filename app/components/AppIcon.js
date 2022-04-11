import React from "react";

import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppIcon({ backgroundColor, iconColor, name, size, style }) {
  return (
    <View
      style={[
        {
          alignItems: "center",
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
