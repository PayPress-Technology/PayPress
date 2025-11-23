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
              source={require("../../../assets/images/fundWallet_mobile.png")}
              style={styles.Img}
            />
          </View>

          {/*  */}
          <View>
            <Image
              source={require("../../../assets/images/fundWallet_done.png")}
              style={{ height: 55.13, width: 55.13, alignSelf: "center" }}
            />
          </View>
          {/* Text */}
          <View style={styles.txtContainer}>
            <Text style={styles.subTxt}>Done!</Text>
            <Text style={styles.mainTxt}>Wallet funded Successfully</Text>
            <Text
              style={[
                styles.subTxt,
                {
                  fontFamily: "PoppinsMedium",
                  fontSize: 15,
                  textAlign: "center",
                },
              ]}
            >
              You have funded you Account with {"\n"}₦50,000
            </Text>
          </View>

          {/* fund wallet button */}
          <View style={{ paddingBottom: 70 }}>
            <CustonButton1
              text={"Back to Home"}
              onPress={() => {
                router.push("../Home");
              }}
              color={Colors.Secondary}
              TxtColor={Colors.darkMode}
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
    height: "60%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "30%",
    paddingVertical: 30,
  },

  ImgContainer: {
    alignItems: "center",
    // position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    position: "relative",
    top: -40,
  },
  Img: {
    height: 216,
    width: 247,
    resizeMode: "contain",
  },

  txtContainer: {
    alignItems: "center",
    gap: 15,
    marginVertical: 15,
  },
  mainTxt: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: Colors.white,
  },
  subTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: Colors.white,
  },
});
