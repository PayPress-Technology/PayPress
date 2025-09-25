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
import { router } from "expo-router";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function addBVN() {
  return (
    <ThemedContainer>
      <ThemedText style={style.addBVNtxt}>My Payment Methods</ThemedText>

      {/* why need pin */}
      <View style={style.pinTxtContainer}>
        <ThemedText style={style.subPinTxt}>
          You add money to your{" "}
          <Text style={[style.subPinTxt, { fontFamily: "PoppinsBold" }]}>
            PayCoin
          </Text>
          {"\n"} savings from your bank account or debit cards.
          {"\n"} {"\n"}
          <Text style={[style.subPinTxt, { fontFamily: "PoppinsBold" }]}>
            Securely link
          </Text>
          your bank, and debit card and start saving money away.
        </ThemedText>
      </View>

      {/* Buttons */}
      <View style={{ gap: 20, marginTop: 20 }}>
        {/* ATM buttons */}
        <CustonButton1
          text={"Link ATM Card"}
          onPress={() => {
            // router.navigate();
          }}
          color={Colors.Primary}
          TxtColor={Colors.white}
        />

        {/* Bank buttons */}
        <CustonButton1
          text={"Link Your Bank"}
          onPress={() => {
            // router.navigate();
          }}
          color={Colors.Secondary}
          TxtColor={Colors.darkMode}
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

  pinTxtContainer: {
    // alignItems: "center",
    alignSelf: "center",
    gap: 5,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    padding: 20,
    borderColor: "#E9E9E9",
    marginHorizontal: 15,
  },

  subPinTxt: {
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    color: Colors.gray,
    justifyContent: "center",
  },
});
