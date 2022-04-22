import React from "react";

import { StyleSheet, View } from "react-native";

import AppCard from "../components/AppCard";

function MoreInfoScreen({ route, navigation }) {
  console.log(route.params.paramAll);

  return (
    <View style={styles.container}>
      <AppCard
        image={route.params.paramAll.image}
        title={route.params.paramAll.title}
        entry={route.params.paramAll.entry}
        entryid={route.params.paramAll.entryid}
        date={route.params.paramAll.date}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default MoreInfoScreen;
