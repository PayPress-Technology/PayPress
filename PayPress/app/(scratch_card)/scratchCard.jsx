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
import { Ionicons } from "@expo/vector-icons";

export default function addBVN() {
  return (
    <SafeAreaView>
      <Text style={style.addBVNtxt}>Scratch Card</Text>

      {/* Text field */}
      <View>
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
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor={Colors.gray}
            autoCorrect={false}
          />
          <Ionicons
            name="search"
            size={24}
            style={{
              position: "absolute",
              left: 10,
              right: 0,
              alignSelf: "center",
            }}
          />
        </ImageBackground>
      </View>

      {/* Categories */}
      <View>
        <TouchableOpacity>
          <View>
            {/* JAMB */}
            <View style={style.mainContainer}>
              <Image
                source={require("../../assets/images/JAMB.png")}
                style={style.Img}
              />

              <Text style={style.mainPinTxt}>
                JAMB {"\n"}
                <Text style={style.subPinTxt}>JAMB</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* divider */}
        <View style={style.divider}></View>
        {/* End */}

        {/* WAEC */}
        <TouchableOpacity>
          <View>
            {/* JAMB */}
            <View style={style.mainContainer}>
              <Image
                source={require("../../assets/images/WAEC.png")}
                style={style.Img}
              />

              <Text style={style.mainPinTxt}>
                WAEC {"\n"}
                <Text style={style.subPinTxt}>WAEC</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* divider */}
        <View style={style.divider}></View>
        {/* End */}

        {/* NECO */}
        <TouchableOpacity>
          <View>
            {/* JAMB */}
            <View style={style.mainContainer}>
              <Image
                source={require("../../assets/images/NECO.png")}
                style={style.Img}
              />

              <Text style={style.mainPinTxt}>
                NECO {"\n"}
                <Text style={style.subPinTxt}>NECO</Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* divider */}
        <View style={style.divider}></View>
        {/* End */}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  addBVNtxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: Colors.darkMode,
    padding: 20,
  },
  inputFD: {
    width: "90%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 30,
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
    paddingLeft: "10%",
  },
  mainContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    margin: 20,
  },
  Img: {
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
  mainPinTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    color: Colors.darkMode,
  },
  subPinTxt: {
    fontFamily: "PoppinsMedium",
    color: Colors.green,
    fontSize: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#C3C3C3",
    marginHorizontal: 12,
    // marginTop: 5,
    width: "80%",
    alignSelf: "center",
  },
});
