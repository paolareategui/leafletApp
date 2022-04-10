import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppColors from "../config/AppColors";

function AppButton({ color = "secondaryColor", title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.button, { backgroundColor: AppColors[color] }]}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    padding: 15,
    width: "70%",
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: AppColors.white,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default AppButton;
