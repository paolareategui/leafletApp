import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="User profile"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Categories" component={CategoriesScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
