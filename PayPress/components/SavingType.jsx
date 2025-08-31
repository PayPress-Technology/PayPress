import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Colors } from "../constants/Colors";

const SavingType = ({ text, text2, onPress, imageIcon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 55,
          width: 150,
          borderRadius: 8,
          backgroundColor: "#DFDEDE",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ color: Colors.darkMode, fontSize: 12 }}>{text}</Text>
          <Text
            style={{
              color: "#B0B0B0",
              fontFamily: "PoppinsMedium",
              fontSize: 12,
            }}
          >
            {text2}
          </Text>
        </View>
        {/* icon */}
        <View>
          <TouchableOpacity>
            {" "}
            <Image
              style={{
                resizeMode: "contain",
                width: 20,
                height: 20,
              }}
              source={imageIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SavingType;

const styles = StyleSheet.create({
  button: {},
});
