import React from "react";

import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppCoverImage from "./app/components/AppCoverImage";
import HomeScreen from "./app/screens/HomeScreen";
import AppIcon from "./app/components/AppIcon";
import AppImageCollection from "./app/components/AppImageCollection";
import AppListItem from "./app/components/AppListItem";
import AppPickerItem from "./app/components/AppPickerItem";
import AppScreen from "./app/components/AppScreen";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppColors from "./app/config/AppColors";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen.js";

import AuthNavigator from "./app/navigation/AuthNavigator";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

export default function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: AppColors.backgroundColor,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <AppScreen>
        <AuthNavigator />
      </AppScreen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
});
