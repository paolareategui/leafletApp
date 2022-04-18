import React, { useEffect, useState } from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppButton from "../components/AppButton";
import AppImageCollection from "../components/AppImageCollection";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";

//Pass the current user's ID and retrieve their corresponding entries
const entries = (userid) => {
  let commonData = DataStore.getInstance();
  return commonData.getEntries(userid);
};

function HomeScreen({ navigation, route }) {
  //Save the current user's entries
  const [userEntries, setUserEntries] = useState("");

  //Event listener
  useEffect(
    () =>
      navigation.addListener("focus", () => {
        const newEntries = entries(route.params.paramID);
        setUserEntries(newEntries);
      }),
    [userEntries]
  );

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

      {/*Dummy logout button takes user to login screen*/}
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AppText
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#777",
            }}
          >
            Logout
          </AppText>
        </TouchableOpacity>
      </View>

      {/* User photo collection view */}
      <View style={styles.userCollection}>
        <AppImageCollection
          data={userEntries}
          numCols={3}
          navigation={navigation}
        />
      </View>
      {/*Dummy logout button takes user to login screen*/}
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AppText
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#777",
            }}
          >
            Logout
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  userProfile: {
    alignItems: "center",
    paddingTop: 40,
  },
  userCollection: {
    marginBottom: 500,
  },
  logoutButtonContainer: {
    marginBottom: 30,
  },
});

export default HomeScreen;
