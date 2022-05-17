import React from "react";

import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppPostPicker from "./AppPostPicker";
import AppText from "./AppText";

function AppCard({ catid, date, entry, entryid, image, navigation, title }) {
  console.log("entry in AppCard", entry);

  return (
    <View style={styles.container}>
      {/* Show the image whether the image path is a number or an uri */}
      {isFinite(image) ? (
        <Image source={image} style={styles.cardImage} />
      ) : (
        <Image source={{ uri: image }} style={styles.cardImage} />
      )}
      <View style={styles.entryDataContainer}>
        <View style={styles.TitleContainer}>
          <AppText style={styles.cardTitle}>{title}</AppText>

          {/* Display the post picker icon and pass the data */}
          <AppPostPicker
            catid={catid}
            data={entryid}
            date={date}
            entry={entry}
            image={image}
            title={title}
            navigation={navigation}
          />
        </View>
        <View style={styles.bodyContainer}>
          <AppText style={styles.cardEntry}>{entry}</AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
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
  bodyContainer: {},
  cardImage: {
    height: 220,
    width: "100%",
  },
  cardTitle: {
    fontWeight: "700",
    marginBottom: 5,
    paddingTop: 2,
  },
  date: { paddingTop: 10, fontSize: 12 },
  entryDataContainer: {
    paddingHorizontal: 10,
  },
  TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
  },
});

export default AppCard;
