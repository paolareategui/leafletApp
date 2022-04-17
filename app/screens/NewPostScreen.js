import React, { useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";
import AppErrorText from "../components/AppErrorText";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

function NewPostScreen({ navigation }) {
  //Image picker setup
  let pickImage = async (handleChange) => {
    //Set up phone access permission
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    //If image is selected save it to state variable
    if (!result.cancelled) {
      handleChange(result.uri);
    }
  };
  //Image picker setup ends

  //State variable to set visibility of selected image on and off
  const [selectedImage, setSelectedImage] = useState(false);

  //Function to handle adding a new entry
  const addEntry = (values) => {
    console.log("values sent to addEntry", values);

    // let commonData = DataManager.getInstance();
    // let user = commonData.getUserID();
    // const entries = commonData.getEntries(user);
    // const entryid = entries.length + 1;
    // const newEntry = {
    //   title: title,
    //   category: category.label,
    //   catid: category.catid,
    //   entryid: entryid,
    //   entry: entry,
    //   userid: user,
    //   image: selectedImage.path,
    // };
    // console.log(newEntry);
    // commonData.addEntry(newEntry);
  };

  //Yup schema for validation
  const schema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    entry: Yup.string().required().max(240).label("Entry"),
    catid: Yup.string().required().label("Category"),
  });

  return (
    //Scrollview allows the content to bounce back when it reaches the end of the content
    <ScrollView>
      {/* Everything inside KeyboardAvoidingView will move up when the keyboard
      appears */}
      <KeyboardAvoidingView keyboardVerticalOffset={40} behavior="position">
        <View>
          {/* New Post form starts */}
          <Formik
            initialValues={{
              title: "",
              // category: "",
              entry: "",
              // image: "",
              // userid: "",
              catid: "",
              // entryid: "",
            }}
            onSubmit={(values, { resetForm }) => {
              addEntry(values);
              resetForm();
              setSelectedImage(false);
              alert("You'll be sent to home screen");
            }}
            validationSchema={schema}
          >
            {/* Variables to be passed to form */}
            {({
              errors,
              handleChange,
              handleSubmit,
              setFieldValue,
              setFieldTouched,
              touched,
              values,
            }) => (
              // Form input fields
              <>
                {/* Display selected image and remove button conditionally */}
                <TouchableOpacity
                  onPress={() => {
                    pickImage(handleChange("image"));
                    setSelectedImage(true);
                  }}
                >
                  {selectedImage ? (
                    <View>
                      <Image
                        source={{ uri: values.image }}
                        style={styles.selectedImage}
                      />
                    </View>
                  ) : (
                    <View style={styles.imageButton}>
                      <AppIcon
                        borderRadius={50}
                        name="camera"
                        iconColor={AppColors.backgroundColor}
                        size={50}
                        backgroundColor={AppColors.primaryColor}
                      />
                    </View>
                  )}
                </TouchableOpacity>

                <View style={styles.textInputContainer}>
                  <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={true}
                    clearButtonMode="while-editing"
                    keyboardType="default"
                    onBlur={() => setFieldTouched("title")}
                    onChangeText={handleChange("title")}
                    placeholder="Title"
                    value={values.title || ""}
                  />

                  {/* Error message for email */}
                  {touched.title && <AppErrorText>{errors.title}</AppErrorText>}

                  <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={true}
                    onBlur={() => setFieldTouched("entry")}
                    clearButtonMode="while-editing"
                    keyboardType="default"
                    multiline={true}
                    numberOfLines={40}
                    onChangeText={handleChange("entry")}
                    placeholder="Entry"
                    secureTextEntry
                    value={values.entry || ""}
                  />

                  {/* Error message for password */}
                  {touched.entry && <AppErrorText>{errors.entry}</AppErrorText>}
                </View>

                {/* Select a category */}
                <View>
                  <Picker
                    itemStyle={{ fontSize: 14, marginTop: "0%" }}
                    // passing value directly from formik
                    selectedValue={values.catid}
                    // changing value in formik
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("catid", itemValue);
                      handleChange("catid");
                    }}
                  >
                    <Picker.Item label="Category" value={null} />
                    <Picker.Item label="Succulents" value={1} />
                    <Picker.Item label="Flowers" value={2} />
                    <Picker.Item label="Hanging" value={3} />
                    <Picker.Item label="Herbs" value={4} />
                    <Picker.Item label="Foliage" value={5} />
                    <Picker.Item label="Cactus" value={6} />
                  </Picker>

                  {/* Error message for the picker */}
                  {touched.catid && <AppErrorText>{errors.catid}</AppErrorText>}
                </View>

                <View style={styles.buttonContainer}>
                  <AppButton title="Post" onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
          {/* Login Form ends */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 220,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImage: {
    height: 220,
    width: "100%",
  },
});

export default NewPostScreen;
