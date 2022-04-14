import React from "react";

import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";
import AppImageCollection from "../components/AppImageCollection";
import AppListItem from "../components/AppListItem";
import AppText from "../components/AppText";

const entries = (userid) => {
  let commonData = DataStore.getInstance();
  return commonData.getEntries(userid);
};

function HomeScreen({ navigation, route }) {
  console.log(route.params);
  console.log("id passed to login screen", route.params.paramID);

  const userEntries = entries(route.params.paramID);

  console.log("userEntries", userEntries);

  return (
    <View styles={styles.container}>
      <View style={styles.userProfile}>
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
          }}
          source={route.params.paramImage}
        />
        <AppText>{route.params.paramName}</AppText>
        <AppText>{route.params.paramEmail}</AppText>
      </View>
      <AppImageCollection data={userEntries} numCols={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userProfile: {
    alignItems: "center",
    paddingVertical: 40,
  },
});

export default HomeScreen;
