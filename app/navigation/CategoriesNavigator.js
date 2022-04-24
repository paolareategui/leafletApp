import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDownIcon from "../components/AppDownIcon";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryCollectionScreen from "../screens/CategoryCollectionScreen";
import UpdateScreen from "../screens/UpdateScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";

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

    <Stack.Group
      screenOptions={({ navigation }) => ({
        presentation: "modal",
        headerLeft: () => <AppDownIcon onPress={navigation.goBack} />,
      })}
    >
      <Stack.Screen
        name="Category Collection"
        component={CategoryCollectionScreen}
      />
      <Stack.Screen name="Edit post" component={UpdateScreen} />
      <Stack.Screen
        screenOptions={{ title: "Post" }}
        name="Post"
        component={MoreInfoScreen}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default CategoriesNavigator;
