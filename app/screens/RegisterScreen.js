import React, { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import AppErrorText from "../components/AppErrorText";
import users from "../data/users.json";

import {
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

//Yup schema for validation
const schema = Yup.object().shape({
  username: Yup.string().required().min(2).label("username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  //Check if userid already exists
  const checkUser = ({ email }) => {
    return users.filter((user) => user.email === email).length > 0;
  };
  //Add new user instance
  const addUser = ({ email, password, username }) => {
    //Check if user already exists
    const userExists = checkUser({ email });
    console.log("Does user exist?", userExists);

    //Do accordinly
    if (userExists) {
      alert("You already have an account");
    } else {
      const newUser = {
        userid: email,
        username: username,
        email: email,
        password: password,
      };
      //Add new user to user array
      users.push(newUser);
      //Message and redirection for new user
      alert("Thanks for registering!");
      navigation.navigate("Login");
    }
  };

  return (
    //Everything inside KeyboardAvoidingView will move up when the keyboard appears
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
      {/* Cover image */}
      <View style={styles.coverImageView}>
        <AppCoverImage source={require("../assets/welcome.png")} />
      </View>

      {/* Sign up form starts */}
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          addUser(values);
          resetForm({});
          console.log(values);
        }}
        validationSchema={schema}
      >
        {/* Variables to be passed to form */}
        {({
          errors,
          handleChange,
          handleSubmit,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <View style={styles.textInputContainer}>
              {/* username */}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="default"
                onBlur={() => setFieldTouched("username")}
                onChangeText={handleChange("username")}
                placeholder="Your name"
                textContentType="username"
                value={values.username || ""}
              />

              {/* Error message for username */}
              {touched.username && (
                <AppErrorText>{errors.username}</AppErrorText>
              )}

              {/* Email */}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
                value={values.email || ""}
              />

              {/* Error message for email */}
              {touched.email && <AppErrorText>{errors.email}</AppErrorText>}

              {/* Password */}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={() => setFieldTouched("password")}
                clearButtonMode="while-editing"
                keyboardType="name-phone-pad"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                value={values.password || ""}
              />

              {/* Error message for password */}
              {touched.password && (
                <AppErrorText>{errors.password}</AppErrorText>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <AppButton title="SIGN UP" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      {/* Sign up Form ends */}

      {/* Link to signup form for returning users */}
      <View style={styles.loginLink}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AppText style={{ fontSize: 13 }}>
            Already have an account?{" "}
            <Text style={{ fontWeight: "600" }}>Log in</Text>
          </AppText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
  },
  coverImageView: {
    marginTop: "-20%",
  },
  loginLink: { alignItems: "center", marginTop: 40, marginBottom: 10 },
  textInputContainer: { alignSelf: "center", width: "70%" },
});

export default RegisterScreen;
