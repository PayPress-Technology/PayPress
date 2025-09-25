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
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function Login() {
  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        {/* Back Icon */}
        <TouchableOpacity
          style={{
            padding: 15,
          }}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={35}
            color={Colors.gray}
          />
        </TouchableOpacity>
        <ThemedText
          style={{
            textAlign: "left",
            fontFamily: "PoppinsExtraBold",
            fontSize: 18,
            // marginTop: 50,
            marginHorizontal: 20,
          }}
        >
          Dee,
        </ThemedText>
        <ThemedText
          style={{
            textAlign: "left",
            fontFamily: "PoppinsRegular",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        >
          Please set a secure PIN for your Paycoin. Not you? Log out
        </ThemedText>
        <View style={styles.mainContainer}>
          <View style={styles.buttonStyle}>
            <CustonButton1
              text={"Create a PIN"}
              onPress={() => {
                // handle login action here

                router.navigate("./transactionScreen");
              }}
              color={Colors.Secondary}
            />
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="black"
              style={{
                position: "absolute",
                right: 100,
                top: 10,
                zIndex: 1,
                marginHorizontal: 10,
              }}
            />
          </View>
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "75%",
            }}
          >
            Step 2
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buttonStyle: {
    marginTop: "30%",
  },
});
