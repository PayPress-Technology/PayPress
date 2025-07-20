import React from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "left",
          fontFamily: "PoppinsExtraBold",
          fontSize: 18,
          marginTop: 50,
          marginHorizontal: 20,
        }}
      >
        Get Up and Running
      </Text>
      <Text
        style={{
          textAlign: "left",
          fontFamily: "PoppinsRegular",
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        Register to start saving and investing with PAYpress today!
      </Text>
      <View style={styles.mainContainer}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#8C8989",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
