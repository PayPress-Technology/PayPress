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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import SavingType from "@/components/SavingType";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";

export default function MySavings() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={style.headingTxt}>Savings Dashboard</Text>
      <Text
        style={{ fontSize: 12, fontFamily: "PoppinsRegular", paddingLeft: 15 }}
      >
        Track your financial goals
      </Text>
      <View>
        {/* start */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <View>
            <TouchableOpacity>
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
                  <Text style={{ color: Colors.darkMode, fontSize: 14 }}>
                    {" "}
                    Active Plans
                  </Text>
                  <Text
                    style={{
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 16,
                    }}
                  >
                    1
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
                      source={require("../../assets/images/active-plan.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/*  */}
          <View>
            <TouchableOpacity>
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
                  <Text style={{ color: Colors.darkMode, fontSize: 14 }}>
                    {" "}
                    Paused Plans
                  </Text>
                  <Text
                    style={{
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 16,
                    }}
                  >
                    1
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
                      source={require("../../assets/images/pause-plan.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* end */}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingTop: 10,
    color: Colors.darkMode,
  },
  dash_Container: {
    marginTop: 8,
  },
  dash_image: {
    borderRadius: 15,
    height: 101,
    justifyContent: "center",

    overflow: "hidden",
    marginHorizontal: 8,
  },
  dashContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  savingTypeContainer: {
    backgroundColor: "#EEEEEE]",
    marginTop: 20,
    marginHorizontal: 20,
  },
  savingTypes: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  scroll: {},
  button: {
    padding: 20,
    width: "99%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.15,
    // shadowRadius: 6,
    // elevation: 8,
  },
  mainTxt: {
    fontSize: 16,
    fontFamily: "PoppinsBold",

    color: Colors.white,
  },
});
