import React, { useState } from "react";

import { StyleSheet } from "react-native";

import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppCoverImage from "./app/components/AppCoverImage";
import HomeScreen from "./app/screens/HomeScreen";
import AppIcon from "./app/components/AppIcon";
import AppImageCollection from "./app/components/AppImageCollection";
import AppListItem from "./app/components/AppListItem";
import AppPickerItem from "./app/components/AppPickerItem";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";
import NewPostScreen from "./app/screens/NewPostScreen";
import RegisterScreen from "./app/screens/RegisterScreen.js";

import AppColors from "./app/config/AppColors";
import AppScreen from "./app/components/AppScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function App() {
  //Customize react navigation colours match app colours
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.backgroundColor,
    },
  };
  //Controll when to stop displaying the lottie animation
  const [played, setPlayed] = useState(false);

  return (
    //Display animation first, render authnavigator when animation has finished playing
    <NavigationContainer theme={navTheme}>
      <AppScreen>
        {played ? (
          <AuthNavigator />
        ) : (
          <LottieView
            source={require("./app/assets/lottie-animation.json")}
            autoPlay
            loop={false}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginTop: 80,
            }}
            onAnimationFinish={() => {
              setPlayed(true);
              console.log("animation finished");
            }}
          />
        )}
      </AppScreen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
});
