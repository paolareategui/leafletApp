import React from "react";

import { Image, Text, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";

function AppCoverImage({ source }) {
  return <Image style={styles.container} source={source} />;
}

const styles = StyleSheet.create({
  container: {
    resizeMode: "cover",
    width: 390,
    height: 390,
  },
});

export default AppCoverImage;
