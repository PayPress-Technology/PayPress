import React, { useState } from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import CustonButton1 from "@/components/CustomButton1";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <View style={styles.mainContainer}>
          <View style={{ marginTop: 20 }}>
            <Ionicons
              name="finger-print-outline"
              size={120}
              color={"#fff"}
              style={{ alignSelf: "center", marginVertical: 50 }}
            />
            <View style={styles.bioTxtContainer}>
              <Text style={styles.bioTxt}>Fingerprint for PAYpress</Text>
              <Text style={styles.bioTxtSub}>
                {" "}
                Use fingerprint to unlock PAYpress
              </Text>
            </View>
            <CustonButton1
              text={"Cancel"}
              onPress={() => {
                // handle login action here
                router.navigate("");
              }}
              color={Colors.Secondary}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "90%",
    height: "85%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: "10%",
  },
  bioTxtContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bioTxt: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: "#fff",
    textAlign: "center",
  },
  bioTxtSub: {
    fontFamily: "PoppinsRegular",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});
