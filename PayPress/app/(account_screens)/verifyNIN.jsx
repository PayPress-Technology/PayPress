import React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  ScrollView,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import CustonButton1 from "@/components/CustomButton1";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "../../components/ThemedText";

export default function Verify_NIN() {
  return (
    <ThemedContainer>
      <ThemedText style={style.addBVNtxt}>Verify NIN</ThemedText>

      {/* Text field */}
      <View>
        <ThemedText
          style={{ fontSize: 12, fontFamily: "PoppinsMedium", paddingLeft: 20 }}
        >
          Enter your NIN
        </ThemedText>
        <ImageBackground
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "space-around",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={style.inputFD}
            //   value={email}
            //   onChangeText={setEmail}
            keyboardType="numeric"
            autoCapitalize="none"
            placeholder="123456789"
            placeholderTextColor={Colors.gray}
            autoCorrect={false}
          />

          <Image
            source={require("../../assets/images/bvn-lock.png")}
            style={{
              resizeMode: "contain",
              width: 20,
              height: 20,
              position: "absolute",
              right: 10,
            }}
          />
        </ImageBackground>
      </View>

      {/*  */}
      <View
        style={{
          backgroundColor: "#D9D9F8",
          borderRadius: 10,
          padding: 10,
          alignSelf: "flex-start",
          margin: 20,
        }}
      >
        <Text
          style={{
            color: Colors.Primary,
            fontFamily: "PoppinsMedium",
            fontSize: 12,
          }}
        >
          Enter your NIN above
        </Text>
      </View>

      {/* why need pin */}
      <View style={style.pinTxtContainer}>
        <Text style={style.mainPinTxt}>Why do we need your NIN?</Text>
        <Text style={style.subPinTxt}>
          We need your NIN to verify your identify and ensure that{"\n"}
          your account is secure. This information is required by the{"\n"}
          Central Bank of Nigeria (CBN) to help banks identify you{"\n"}
          and prevent fraud.
        </Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <CustonButton1
          text={"ADD PIN"}
          onPress={() => {}}
          color={Colors.Primary}
          TxtColor={Colors.white}
        />
      </View>
    </ThemedContainer>
  );
}

const style = StyleSheet.create({
  addBVNtxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    // color: Colors.darkMode,
    padding: 20,
  },
  inputFD: {
    width: "90%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
  },
  pinTxtContainer: {
    // alignItems: "center",
    alignSelf: "center",
    gap: 5,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    borderWidth: 0.3,
    padding: 10,
    borderColor: "#E9E9E9",
    elevation: 5,
  },
  mainPinTxt: {
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    color: Colors.darkMode,
  },
  subPinTxt: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.darkMode,
    justifyContent: "center",
  },
});
