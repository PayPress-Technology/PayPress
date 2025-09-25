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

export default function Fund_Wallet() {
  const [error, setError] = useState("");

  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <View style={styles.mainContainer}>
          <View style={styles.ImgContainer}>
            {/*  */}
            <Image
              source={require("../../assets/images/fundWallet_mobile.png")}
              style={styles.Img}
            />

            <Image
              source={require("../../assets/images/fundWallet_done.png")}
              style={{ height: 55.13, width: 55.13 }}
            />
          </View>

          {/*  */}

          {/* fund wallet button */}
          <View>
            <CustonButton1
              text={"Back to Home"}
              onPress={() => {
                router.push("../Home");
              }}
              color={Colors.Secondary}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "90%",
    height: "80%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: "10%",
    paddingVertical: 30,
  },
  bioTxtContainer: {
    // alignItems: "center",
    paddingHorizontal: 5,
  },
  bioTxt: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: "#fff",
    marginLeft: 20,
    // textAlign: "center",
  },
  bioSubTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
    // textAlign: "center",
    marginLeft: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 30,
    marginBottom: 20,
  },
  ImgContainer: {
    alignItems: "center",
    // position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
  Img: {
    height: 216,
    width: 247,
    resizeMode: "contain",
  },
  button: {
    // width: "40%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.Secondary,
  },
  BtnTxt: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 10,
    gap: 5,
  },
});
