import React, { useState } from "react";

import { Modal, StyleSheet, Pressable, View } from "react-native";

import AppColors from "../config/AppColors";
import DataStore from "../data/DataStore";
import AppIcon from "./AppIcon";
import AppPickerItem from "./AppPickerItem";
import AppText from "./AppText";

function AppPostPicker({ data, navigation, entry, image, title }) {
  console.log("Data sent to postpicker ", data);

  //Handle deleting an entry
  const deleteEntry = (id) => {
    let commonData = DataStore.getInstance();
    commonData.deleteEntry(id);
    setModalVisible(!modalVisible);
    alert("Your entry was deleted");
    navigation.pop(1);
  };

  //Handle updating an entry
  const updateEntry = (id) => {
    console.log("update entry triggered", id);
    setModalVisible(!modalVisible);
    navigation.replace("Edit post", {
      paramTitle: title,
      paramEntry: entry,
      paramImage: image,
    });
  };

  //Set up modal state
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {/* Set up modal view */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          {/* Delete */}
          <AppPickerItem label="Delete" onPress={() => deleteEntry(data)} />
          {/* Update */}
          <AppPickerItem label="Edit" onPress={() => updateEntry(data)} />
          {/* Cancel */}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AppText style={{ color: AppColors.black }}>Cancel</AppText>
          </Pressable>
        </View>
      </Modal>

      <View>
        {/* Icon when pressed launches the modal */}
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <AppIcon
            style={{ height: 20, width: 20 }}
            name="dots-horizontal"
            size={30}
            color={AppColors.secondaryColor}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: "50%",
    marginHorizontal: "30%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AppPostPicker;
