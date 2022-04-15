import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";

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
    <Stack.Group screenOptions={{ presentation: "modal", title: "Your post" }}>
      <Stack.Screen name="More Info" component={MoreInfoScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default HomeNavigator;
