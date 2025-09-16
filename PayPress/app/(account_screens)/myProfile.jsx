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
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function my_savings() {
  return (
    <SafeAreaView>
      <Text style={styles.headingTxt}>My Profile</Text>

      <View style={styles.profileDash}>
        <Text
          style={{
            color: Colors.white,
            paddingTop: 5,
            fontSize: 18,
            fontFamily: "PoppinsSemiBold",
          }}
        >
          My Profile
        </Text>

        <View>
          {/* Profile Image */}
          <View></View>

          {/* Profile Text */}
          <View></View>
        </View>
      </View>
      {/* end */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingTop: 10,
    color: Colors.darkMode,
  },
  profileDash: {
    width: "95%",
    height: 167,
    backgroundColor: Colors.Primary,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    // alignItems: "center",
    alignSelf: "center",
  },
});
