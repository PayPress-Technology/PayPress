import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Colors } from "../constants/Colors";

const FundCards = ({ text, text2, onPress, imageIcon, percentage }) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      {/* 1 */}
      <View style={styles.ImageIcon}>
        <Image style={styles.img} source={imageIcon} />
      </View>
      {/* ... */}

      {/* 2 */}
      <View style={styles.middleTxt}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "PoppinsSemiBold",
            color: Colors.darkMode,
          }}
        >
          {text}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "PoppinsSemiBold",
            color: "#AAAAAA",
          }}
        >
          {text2}
        </Text>
      </View>
      {/* ... */}

      {/* 3 */}
      <View style={styles.percentTxt}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "PoppinsSemiBold",
            color: Colors.darkMode,
          }}
        >
          {percentage}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "PoppinsSemiBold",
            color: "#AAAAAA",
          }}
        >
          APY
        </Text>
      </View>
      {/* ... */}
    </TouchableOpacity>
  );
};
export default FundCards;

const styles = StyleSheet.create({
  mainContainer: {
    height: 101,
    width: "98%",
    borderRadius: 8,
    backgroundColor: "#DFDEDE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
    gap: 10,
  },
  img: {
    width: 42,
    height: 42,
  },
});
