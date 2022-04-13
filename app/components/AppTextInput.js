import React from "react";

import { StyleSheet, TextInput, View } from "react-native";

import AppColors from "../config/AppColors";

function AppTextInput({ color = AppColors.black, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={color}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  textInput: {
    backgroundColor: AppColors.white,
    width: "100%",
    alignSelf: "center",
    padding: 15,
    borderColor: AppColors.secondaryColor,
    borderWidth: 0.5,
    borderRadius: 4,
  },
});

export default AppTextInput;
