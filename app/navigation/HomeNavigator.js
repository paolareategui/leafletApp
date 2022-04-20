import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="Post" component={MoreInfoScreen} />
      <Stack.Screen
        screenOptions={{ title: "Edit your post" }}
        name="Edit post"
        component={UpdateScreen}
      />
    </Stack.Group>

    {/* <Stack.Group>
      <Stack.Screen
        screenOptions={{ title: "Edit your post" }}
        name="Update"
        component={UpdateScreen}
      />
    </Stack.Group> */}
  </Stack.Navigator>
);

export default HomeNavigator;
