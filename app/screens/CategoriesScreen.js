import React from "react";

import { FlatList, View, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";

//TEST DATA
const categories = [
  { id: 1, text: "succulents", icon: "spa" },
  { id: 2, text: "flowers", icon: "flower" },
  { id: 3, text: "hanging", icon: "globe-light" },
];

function CategoriesScreen(props) {
  return (
    <View style={styles.innerContainer}>
      <FlatList
        numColumns={3}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            style={{
              width: 90,
              height: 90,
              marginHorizontal: 5,
              borderRadius: 10,
            }}
            color={AppColors.backgroundColor}
            icon={item.icon}
            iconSize={20}
            text={item.text}
            backgroundColor={AppColors.primaryColor}
            onPress={() => console.log("hey")}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
