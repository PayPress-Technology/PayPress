import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import { Colors } from "../constants/Colors";

const DropdownField = ({ label, value, onPress }) => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TouchableOpacity style={styles.field} onPress={onPress}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DropdownField;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: "center",
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    height: 55,
  },
  value: {
    fontSize: 15,
    color: Colors.darkMode,
  },
  arrow: {
    fontSize: 24,
    color: "#999",
    fontWeight: "300",
  },
});
