import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

//Dummy data
const users = [
  {
    id: "user1",
    name: "Carmen Carrera",
    email: "carmen@mail.com",
    password: "1234",
    image: require("../assets/user1.png"),
  },
  {
    id: "user2",
    name: "Tom Craig",
    email: "tc@mail.com",
    password: "1234",
    image: require("../assets/user2.png"),
  },
];

import {
  Linking,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppButton from "../components/AppButton";
import AppCoverImage from "../components/AppCoverImage";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

function LoginScreen(props) {
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
      {/* Cover image */}
      <AppCoverImage
        source={require("/Users/paola/Projects/Uni/COMP3130/leafletApp/app/assets/welcome.png")}
      />

      {/* Login form starts */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="name-phone-pad"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <AppButton title="LOG IN" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      {/* <View>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardType="name-phone-pad"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <AppButton title="LOG IN" onPress={() => console.log("hi")} />
      </View> */}
      {/* Login Form ends */}

      {/* Link to signup form for returning users */}
      <View style={styles.loginLink}>
        <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
          <AppText style={{ fontSize: 13 }}>
            No account? <Text style={{ fontWeight: "600" }}>Log in</Text>
          </AppText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginLink: { alignItems: "center", marginTop: 40 },
});

export default LoginScreen;
