import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

const CustonButton1 = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.mainTxt}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CustonButton1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5A5A5A",
    padding: 20,
    width: "80%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  mainTxt: {
    fontSize: 16,
    fontFamily: "PoppinsBold",
    color: "white",
  },
});
