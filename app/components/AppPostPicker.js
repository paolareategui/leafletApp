//Component that contains delete and edit options for posts
import React, { useState } from "react";

import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import AppColors from "../config/AppColors";
import AppIcon from "./AppIcon";
import AppPickerItem from "./AppPickerItem";
import DataStore from "../data/DataStore";

function AppPostPicker({ data, navigation, entry, image, title }) {
  //Small array of options for flatlist
  const postOptions = [
    { id: 1, name: "Edit" },
    { id: 2, name: "Delete" },
    { id: 3, name: "Cancel" },
  ];

  //Handle picker selection
  const handleSelection = (selection) => {
    switch (selection) {
      case "Edit":
        selection = "Edit";
        updateEntry(data);
        break;
      case "Delete":
        deleteEntry(data);
        break;
      case "Cancel":
        setModalVisible(!modalVisible);
        break;
    }
  };

  //Handle updating an entry
  const updateEntry = (id) => {
    console.log("update entry triggered", id);
    setModalVisible(!modalVisible);
    navigation.replace("Edit post", {
      paramTitle: title,
      paramEntry: entry,
      paramImage: image,
      paramEntryId: data,
    });
  };

  //Handle deleting an entry
  const deleteEntry = (id) => {
    let commonData = DataStore.getInstance();
    commonData.deleteEntry(id);
    setModalVisible(!modalVisible);
    alert("Your entry was deleted");
    navigation.pop(1);
  };

  //Separate the flatlist with lines
  const flatlistSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CCC",
        }}
      ></View>
    );
  };

  //Set up modal state
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {/* Set up modal view */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalView}>
          <FlatList
            data={postOptions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.name}
                onPress={() => handleSelection(item.name)}
              />
            )}
            ItemSeparatorComponent={flatlistSeparator}
          />
        </View>
      </Modal>

      <View>
        {/* Icon when pressed launches the modal */}
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 130,
    marginHorizontal: "30%",
    backgroundColor: AppColors.white,
    borderRadius: 5,
    shadowColor: AppColors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AppPostPicker;
