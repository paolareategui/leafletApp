import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import HomeNavigator from "./HomeNavigator";
import NewPostScreen from "../screens/NewPostScreen";
import CategoriesNavigator from "./CategoriesNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: AppColors.primaryColor,
      tabBarActiveTintColor: AppColors.primaryColor,
      tabBarActiveBackgroundColor: AppColors.backgroundColor,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon size={55} name="home" iconColor={AppColors.primaryColor} />
        ),
        tabBarLabelStyle: { fontSize: 11, marginBottom: 3 },
      }}
    />

    <Tab.Screen
      name="New post"
      component={NewPostScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={55}
            name="plus-circle"
            iconColor={AppColors.primaryColor}
          />
        ),
        tabBarLabelStyle: { fontSize: 11, marginBottom: 3 },
      }}
    />

    <Tab.Screen
      name="Categories"
      component={CategoriesNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon size={55} name="leaf" iconColor={AppColors.primaryColor} />
        ),
        tabBarLabelStyle: { fontSize: 11, marginBottom: 3 },
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
