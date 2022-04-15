import React from "react";

import { Image, StyleSheet, View } from "react-native";

import DataStore from "../data/DataStore";
import AppImageCollection from "../components/AppImageCollection";
import AppText from "../components/AppText";

//Pass the current user's ID and retrieve their corresponding entries
const entries = (userid) => {
  let commonData = DataStore.getInstance();
  return commonData.getEntries(userid);
};

function HomeScreen({ route }) {
  //Save the user entries into a variable
  const userEntries = entries(route.params.paramID);

  return (
    <View styles={styles.container}>
      {/* User profile view */}
      <View style={styles.userProfile}>
        <Image
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
          }}
          source={route.params.paramImage}
        />
        <AppText style={{ fontWeight: "bold", marginTop: 15 }}>
          {route.params.paramName}
        </AppText>
        <AppText>{route.params.paramEmail}</AppText>
      </View>

      {/* User photo collection view */}
      <View style={styles.userCollection}>
        <AppImageCollection data={userEntries} numCols={3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userProfile: {
    alignItems: "center",
    paddingVertical: 40,
  },
  userCollection: {
    alignItems: "center",
  },
});

export default HomeScreen;
