//Creates an item for any app picker
//Accepts iconComponent (AppIcon), onPress and a title
import React from "react";

import { StyleSheet, Pressable, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppPickerItem({ iconComponent, onPress, label }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {label && <AppText>{label}</AppText>}
        {iconComponent}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
});

export default AppPickerItem;
