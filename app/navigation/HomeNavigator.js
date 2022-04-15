import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen
        name="User profile"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default HomeNavigator;
