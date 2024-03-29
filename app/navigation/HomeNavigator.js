import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDownIcon from "../components/AppDownIcon";
import HomeScreen from "../screens/HomeScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";
import UpdateScreen from "../screens/UpdateScreen";

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
    <Stack.Group
      screenOptions={({ navigation }) => ({
        presentation: "modal",
        headerLeft: () => <AppDownIcon onPress={navigation.goBack} />,
      })}
    >
      <Stack.Screen name="Post" component={MoreInfoScreen} />
      <Stack.Screen name="Edit post" component={UpdateScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default HomeNavigator;
