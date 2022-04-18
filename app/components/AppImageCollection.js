import React, { useState } from "react";

import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppImageCollection({ data, navigation, numCols }) {
  return (
    <View>
      {/* Displays user images */}
      <View style={styles.userImages}>
        <FlatList
          numColumns={numCols}
          data={data}
          keyExtractor={(item) => item.entryid}
          ListEmptyComponent={
            //Display this message if user images are not available
            <AppText style={{ textAlign: "center" }}>
              You haven't posted anything yet
            </AppText>
          }
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("More Info", {
                    paramAll: item,
                  })
                }
              >
                {isFinite(item.image) ? (
                  <Image
                    source={item.image}
                    style={{
                      width: 115,
                      height: 115,
                      margin: 4,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 115,
                      height: 115,
                      margin: 4,
                      borderRadius: 10,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    borderRadius: 10,
    // marginVertical: "40%",
    paddingVertical: "40%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  userImages: {
    alignItems: "center",
  },
});

export default AppImageCollection;
