import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import users from "../data/users.json";
import DataStore from "../data/DataStore";
import AppErrorText from "../components/AppErrorText";

//Yup schema for validation
const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

//Validate that user exists
const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

//Get user ID from dummy data using email address as unique identificator
const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};

//Generate an instance of the user to pass as parameters
const createUser = ({ email }) => {
  let commonData = DataStore.getInstance();
  let userid = getUser({ email }).userid;
  commonData.setUserID(userid);
};

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

function LoginScreen({ navigation }) {
  return (
    //Everything inside KeyboardAvoidingView will move up when the keyboard appears
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
      {/* Cover image */}
      <AppCoverImage source={require("../assets/welcome.png")} />

      {/* Login form starts */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            console.log("values", values);
            resetForm({});
            createUser(values);
            navigation.navigate("User home", {
              screen: "Home",
              params: {
                screen: "User profile",
                params: {
                  paramEmail: values.email,
                  paramName: getUser(values).username,
                  paramImage: getUser(values).image,
                  paramID: getUser(values).userid,
                },
              },
            });
          } else {
            resetForm({});
            alert("Uh oh! Invalid login details");
          }
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
          // Form input fields
          <>
            <View style={styles.textInputContainer}>
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
              <AppButton title="LOG IN" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      {/* Login Form ends */}

      {/* Link to signup form for returning users */}
      <View style={styles.loginLink}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <AppText style={{ fontSize: 13 }}>
            No account? <Text style={{ fontWeight: "600" }}>Sign up</Text>
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
  loginLink: { alignItems: "center", marginTop: 40 },
  textInputContainer: { alignSelf: "center", width: "70%" },
});

export default LoginScreen;
