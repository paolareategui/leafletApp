import React from "react";

import { StyleSheet, TouchableHighlight, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppPickerItem({ iconComponent, onPress, label }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={AppColors.accentColor}
    >
      <View style={styles.container}>
        {label && <AppText>{label}</AppText>}
        {iconComponent}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
});

export default AppPickerItem;
