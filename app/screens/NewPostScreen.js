import React, { useState } from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";
import AppErrorText from "../components/AppErrorText";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";

function NewPostScreen(props) {
  //Image picker setup
  let openImagePickerAsync = async () => {
    //Set up phone access permission
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    //Handle cancelling out of image picker
    if (pickerResult.cancelled === true) {
      return;
    }

    //Save image into state variable
    setSelectedImage({ path: pickerResult.uri });
  };
  //Image picker setup ends

  //State variables to be used to add new entries
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View>
      {/* Display image and remove button when image is selected */}
      {selectedImage ? (
        <View>
          <Image
            source={{ uri: selectedImage.path }}
            style={styles.selectedImage}
          />
        </View>
      ) : (
        <View style={styles.imageButton}>
          <TouchableOpacity onPress={openImagePickerAsync} style={{}}>
            <AppIcon
              borderRadius={50}
              name="camera"
              iconColor={AppColors.backgroundColor}
              size={50}
              backgroundColor={AppColors.primaryColor}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 290,
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
