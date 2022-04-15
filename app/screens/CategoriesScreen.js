import React from "react";

import { FlatList, View, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";

//Category DATA
const categories = [
  { catid: 1, text: "Succulents", icon: "spa" },
  { catid: 2, text: "Flowers", icon: "flower" },
  { catid: 3, text: "Hanging", icon: "globe-light" },
  { catid: 4, text: "Herbs", icon: "barley" },
  { catid: 5, text: "Foliage", icon: "sprout" },
  { catid: 6, text: "Cactus", icon: "cactus" },
];

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={categories}
        keyExtractor={(item) => item.catid.toString()}
        renderItem={({ item }) => (
          <AppListItem
            style={{
              width: 90,
              height: 90,
              margin: 10,
              borderRadius: 10,
            }}
            color={AppColors.backgroundColor}
            icon={item.icon}
            iconSize={20}
            text={item.text}
            backgroundColor={AppColors.primaryColor}
            onPress={() =>
              navigation.navigate("Posts", {
                paramCatID: item.catid,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 70,
  },
});

export default CategoriesScreen;
