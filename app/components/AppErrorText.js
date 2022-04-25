//Makes text red and bolded for error messages
import React from "react";

import { Text, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";

function AppErrorText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: AppColors.errorColor,
    paddingVertical: 5,
    fontWeight: "600",
  },
});

export default AppErrorText;
