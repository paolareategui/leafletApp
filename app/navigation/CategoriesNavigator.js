import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryCollectionScreen from "../screens/CategoryCollectionScreen";

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => (
  <Stack.Navigator>
    <Stack.Group>
      <Stack.Screen
        name="My Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Group>
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="Category Collection"
        component={CategoryCollectionScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default CategoriesNavigator;
