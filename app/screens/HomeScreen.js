import React from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppButton from "../components/AppButton";
import AppImageCollection from "../components/AppImageCollection";
import AppText from "../components/AppText";
import DataStore from "../data/DataStore";

//Pass the current user's ID and retrieve their corresponding entries
const entries = (userid) => {
  let commonData = DataStore.getInstance();
  return commonData.getEntries(userid);
};

function HomeScreen({ navigation, route }) {
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

      {/*Dummy logout button takes user to login screen*/}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <AppText style={{ fontWeight: "600", textAlign: "center" }}>
          Logout
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userProfile: {
    alignItems: "center",
    paddingVertical: 40,
  },
  userCollection: {
    marginBottom: 30,
  },
  logoutButtonContainer: {
    marginBottom: 10,
  },
});

export default HomeScreen;
