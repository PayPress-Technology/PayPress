import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../constants/Colors";
import ThemedText from "./ThemedText";

const CustonButton1 = ({ text, onPress, color, TxtColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <ThemedText style={[styles.mainTxt, { color: TxtColor }]}>
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};
export default CustonButton1;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: "80%",
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
  },
});
