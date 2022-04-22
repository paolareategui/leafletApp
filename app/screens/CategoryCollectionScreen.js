import React from "react";

import { FlatList, StyleSheet, View } from "react-native";

import AppCard from "../components/AppCard";
import DataStore from "../data/DataStore";

//Get the current user
const getCurrentUser = () => {
  let commonData = DataStore.getInstance();
  let userid = commonData.getUserID();
  return userid;
};

// Get the current user's posts
const getUserEntries = () => {
  let commonData = DataStore.getInstance();
  let id = getCurrentUser();
  let entries = commonData.getEntries(id);
  return entries;
};

//Get the corresponding entries for the selected category
const getSelectedCategory = (catid) => {
  let entries = getUserEntries();
  return entries.filter((category) => category.catid === catid);
};

function CategoryCollectionScreen({ route, navigation }) {
  //Use routed parameter to fetch entries matching the category id
  const entries = getSelectedCategory(route.params.paramCatID);

  console.log("ENTRIES IN CATEGORY SELECTION", entries);

  return (
    //Category collectio view
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.entryid}
        renderItem={({ item }) => (
          <AppCard
            date={item.date}
            entry={item.entry}
            entryid={item.entryid}
            image={item.image}
            navigation={navigation}
            title={item.title}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default CategoryCollectionScreen;
