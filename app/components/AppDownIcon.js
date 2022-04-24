//Renders a chevron icon to be used in the header bar for modal screens
import react from "react";

import { Image, TouchableOpacity } from "react-native";

function AppDownIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../assets/chevron-down.png")}
        style={{ width: 30, height: 30, flex: 1, marginTop: 0 }}
      />
    </TouchableOpacity>
  );
}

export default AppDownIcon;
