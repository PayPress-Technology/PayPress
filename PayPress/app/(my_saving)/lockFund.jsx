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
import FundCards from "@/components/FundCards";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";

export default function LockFunds() {
  const [autoDebitEnabled, setAutoDebitEnabled] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={style.headingTxt}>Lock Fund</Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "PoppinsMedium",
          marginLeft: 15,
          color: "#AAAAAA",
        }}
      >
        Grow your savings with fixed high returns
      </Text>

      {/* dash... */}
      <View style={style.dash_Container}>
        <ImageBackground
          source={require("../../assets/images/savings_bg.png")}
          style={style.dash_image}
          resizeMode="cover"
        >
          <View style={style.dashContainer}>
            {/* text */}
            <View>
              <Text
                style={{ color: Colors.white, fontSize: 12, marginBottom: 10 }}
              >
                Current Wallet Balance
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: "PoppinsBold",
                  fontSize: 18,
                }}
              >
                ₦25,000.00
              </Text>
            </View>
            {/* icon */}
            <View>
              <TouchableOpacity>
                {" "}
                <Image
                  style={{
                    resizeMode: "contain",
                    width: 38,
                    height: 38,
                  }}
                  source={require("../../assets/images/wallet-line.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* End of dash... */}

      {/* Saving Types Section */}
      <View style={style.savingTypeContainer}>
        <Text style={[style.headingTxt, { fontSize: 16, paddingRight: 20 }]}>
          Choose Lock Period
        </Text>

        <ScrollView
          style={{ marginBottom: 250 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <FundCards
              text={"4 Month Lock"}
              text2={"Short term high yield \n Min ₦5000"}
              imageIcon={require("../../assets/images/clock-yellow.png")}
              percentage={"5.5%"}
            />

            <FundCards
              text={"8 Month Lock"}
              text2={"Balanced growth option  \n Min ₦5000"}
              imageIcon={require("../../assets/images/clock-blue.png")}
              percentage={"7.5%"}
            />

            <FundCards
              text={"12 Month Lock"}
              text2={"Short term high yield \n Min ₦30000"}
              imageIcon={require("../../assets/images/clock-green.png")}
              percentage={"9.5%"}
            />
          </View>
          {/* Customizing forms */}

          <View style={style.inputContainer}>
            <InputField
              mainTxt={"Lock Amount (₦)"}
              holder={"How much do you want to save?"}
              txtType={"numeric"}
            />
          </View>

          {/* button */}

          <CustonButton1
            text={"Lock Funds Now"}
            onPress={() => {
              router.navigate("./lockDashboard");
            }}
            color={Colors.Primary}
            TxtColor={Colors.white}
          />
        </ScrollView>
      </View>
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
