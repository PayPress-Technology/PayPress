import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../constants/Colors";

const CustonButton1 = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.mainTxt}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CustonButton1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    padding: 20,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.15,
    // shadowRadius: 6,
    // elevation: 8,
  },
  mainTxt: {
    fontSize: 16,
    fontFamily: "PoppinsBold",

    color: Colors.darkMode,
  },
});
