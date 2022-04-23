import React, { useEffect, useState } from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import AppButton from "../components/AppButton";
import AppImageCollection from "../components/AppImageCollection";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";

//Create an instace of the dataStore
let commonData = DataStore.getInstance();

//Pass the current user's ID and retrieve their corresponding entries
const entries = (userid) => {
  const thedata = commonData.getEntries(userid);
  //sort data from newest to oldest entries
  const sortData = thedata.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return sortData;
};

//Logout
const logout = () => {
  commonData.logout();
};

//Function begins
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

  //Workaround for user images: react native does not recognize dynamic image paths from Json file :(
  const findTheImage = () => {
    if (route.params.paramID === "user1") {
      return require("../assets/user1.png");
    } else if (route.params.paramID === "user2") {
      return require("../assets/user2.png");
    } else {
      return require("../assets/user0.png");
    }
  };

  const imgVariable = findTheImage();

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
          source={imgVariable}
        />
        <AppText style={{ fontWeight: "bold", marginTop: 15 }}>
          {route.params.paramName}
        </AppText>
        <AppText>{route.params.paramEmail}</AppText>
      </View>

      {/*Logout button makes the dataStore instance null and takes user to login screen*/}
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            logout();
            navigation.navigate("Login");
          }}
        >
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
