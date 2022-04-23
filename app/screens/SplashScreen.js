import React, { useState } from "react";

import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import AuthNavigator from "../navigation/AuthNavigator";

function SplashScreen({ navigation }) {
  return (
    <View>
      <LottieView
        source={require("../assets/lottie-animation.json")}
        autoPlay
        loop={false}
        style={{
          width: 200,
          height: 200,
        }}
        onAnimationFinish={() => {
          console.log("animation finished");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default SplashScreen;
