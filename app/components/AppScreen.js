import React from "react";

import AppColors from "../config/AppColors";

import { SafeAreaView, StyleSheet, View } from "react-native";

function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View style={styles.screenPadding}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  screenPadding: {
    flex: 1,
    // padding: 15,
  },
});

export default AppScreen;
