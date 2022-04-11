import React from "react";

import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppCard({ category, entry, image, title }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View style={styles.TitleContainer}>
          <AppText style={styles.cardTitle}>{title}</AppText>
          <AppIcon
            style={{ height: 20 }}
            name="dots-horizontal"
            size={30}
            color={AppColors.secondaryColor}
          />
        </View>
        <AppText style={styles.cardEntry}>{entry}</AppText>
        <AppText style={styles.cardCategory}>{category}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 15,
    height: 370,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: "hidden",
  },
  cardImage: {
    height: 220,
    width: "100%",
  },
  cardTitle: {
    fontWeight: "700",
    marginBottom: 5,
    paddingTop: 2,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
});

export default AppCard;
