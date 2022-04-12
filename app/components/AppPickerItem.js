//Creates an item for any app picker
//Accepts iconComponent (AppIcon), onPress and a title
import React from "react";

import { StyleSheet, TouchableHighlight, View } from "react-native";

import AppColors from "../config/AppColors";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppPickerItem({ iconComponent, onPress, title }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={AppColors.accentColor}>
      <View style={styles.container}>
        {title && <AppText style={styles.listText}> {title}</AppText>}
        {iconComponent}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppPickerItem;
