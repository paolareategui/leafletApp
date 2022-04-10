import React from "react";

import { Text, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: AppColors.black,
  },
});

export default AppText;
