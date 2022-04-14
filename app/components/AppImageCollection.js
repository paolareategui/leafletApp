import React, { useState } from "react";

import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AppCard from "./AppCard";
import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppImageCollection({ data, numCols }) {
  //Set up modal visibility and data
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");

  return (
    <View>
      {/* Modal view starts */}
      <View>
        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          //   transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            {/* <Image source={modalData.image} /> */}
            <AppCard
              image={modalData.image}
              title={modalData.title}
              entry={modalData.entry}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, { textAlign: "center" }]}>
                Close
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>

      {/* Displays user images */}
      <FlatList
        numColumns={numCols}
        data={data}
        keyExtractor={(item) => item.imageid}
        ListEmptyComponent={
          <AppText>You haven't posted any entries yet</AppText>
        }
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setModalData(item);
              }}
            >
              <Image source={item.image} style={{ width: 115, height: 115 }} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    borderRadius: 10,
    // marginVertical: "40%",
    paddingVertical: "40%",
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

export default AppImageCollection;
