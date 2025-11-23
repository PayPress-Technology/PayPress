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
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import FundCards from "@/components/FundCards";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function LockFunds() {
  const [autoDebitEnabled, setAutoDebitEnabled] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [amount, setAmunt] = useState("");

  return (
    <ThemedContainer style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={80} // adjust if header overlaps
      >
        <ThemedContainer style={style.headingTxt}>Lock Fund</ThemedContainer>
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
            source={require("../../../assets/images/savings_bg.png")}
            style={style.dash_image}
            resizeMode="cover"
          >
            <View style={style.dashContainer}>
              {/* text */}
              <View>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 12,
                    marginBottom: 10,
                  }}
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
                    source={require("../../../assets/images/wallet-line.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* End of dash... */}

        {/* Saving Types Section */}
        <View style={style.savingTypeContainer}>
          <ThemedText
            style={[style.headingTxt, { fontSize: 16, paddingRight: 20 }]}
          >
            Choose Lock Period
          </ThemedText>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <FundCards
                onPress={() => setSelectedType("4 Month Lock")}
                text={"4 Month Lock"}
                text2={"Short term high yield \n Min ₦5000"}
                imageIcon={require("../../../assets/images/clock-yellow.png")}
                percentage={"5.5%"}
                active={selectedType === "4 Month Lock"}
              />

              <FundCards
                onPress={() => setSelectedType("8 Month Lock")}
                text={"8 Month Lock"}
                text2={"Balanced growth option  \n Min ₦5000"}
                imageIcon={require("../../../assets/images/clock-blue.png")}
                percentage={"7.5%"}
                active={selectedType === "8 Month Lock"}
              />

              <FundCards
                onPress={() => setSelectedType("12 Month Lock")}
                text={"12 Month Lock"}
                text2={"Short term high yield \n Min ₦30000"}
                imageIcon={require("../../../assets/images/clock-green.png")}
                percentage={"9.5%"}
                active={selectedType === "12 Month Lock"}
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

            {/* interest screen */}
            <View style={style.interestContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../../assets/images/expected_returns.png")}
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: "PoppinsSemiBold",
                    marginHorizontal: 5,
                  }}
                >
                  Expected Returns
                </Text>
              </View>

              <View style={style.rateInnerCont}>
                {/* period */}
                <Text style={[style.durMain]}>
                  Lock Period {"\n"}
                  <Text style={style.durSub}>{selectedType}</Text>
                </Text>

                {/* rate */}
                <Text style={style.durMain}>
                  Interest Rate {"\n"}
                  <Text style={[style.durSub, ,]}>7.5%</Text>
                </Text>
              </View>

              {/*  */}
              <View style={style.rateInnerCont}>
                {/* period */}
                <Text style={style.rateMain}>
                  Initial Amount {"\n"}
                  <Text style={style.rateMain}>Interest Earned</Text>
                </Text>

                {/* rate */}
                <Text
                  style={[
                    style.rateMain,
                    { fontFamily: "PoppinsBold", color: Colors.darkMode },
                  ]}
                >
                  ₦2,500 {"\n"}
                  <Text style={style.rateSub}>+₦2,500</Text>
                </Text>
              </View>

              {/*  */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    style.rateMain,
                    {
                      color: Colors.darkMode,
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 22,
                    },
                  ]}
                >
                  Total Returns
                </Text>
                <Text
                  style={[
                    style.rateMain,
                    {
                      color: Colors.Secondary,
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 22,
                    },
                  ]}
                >
                  ₦2,500
                </Text>
              </View>
            </View>
            {/*  */}

            <View style={style.interestSubContainer}>
              <View style={style.checkboxContainer}>
                <TouchableOpacity
                  style={style.checkboxRow}
                  onPress={() => setIsAgreed(!isAgreed)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={isAgreed ? "checkbox" : "square-outline"}
                    size={24}
                    color={isAgreed ? Colors.Primary : Colors.gray}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text>
                  I understand that my funds will be locked for 8 months and
                  cannot be{"\n"} withdrawn early.
                  <Text style={{ color: Colors.green }}> Read full terms</Text>
                </Text>
              </View>
            </View>

            {/*  */}

            {/* button */}
            <View style={{ marginBottom: 250 }}>
              <CustonButton1
                text={"Lock Funds Now"}
                onPress={() => {
                  // if (!amount.trim()) {
                  //   alert("Password is required");
                  //   return;
                  // }
                  if (isAgreed) {
                    router.navigate("./lockDashboard");
                  }
                }}
                color={isAgreed ? Colors.Primary : "#CCCCCC"} // Change color based on checkbox
                TxtColor={isAgreed ? Colors.white : "#888888"} // Change text color
                disabled={!isAgreed} // Disable button if not agreed
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}
const style = StyleSheet.create({
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingTop: 10,
    // color: Colors.darkMode,
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
  interestContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: "90%",
    height: 285,
    alignSelf: "center",
    padding: 10,
    gap: 25,
    alignContent: "center",
    marginBottom: 50,
    justifyContent: "center",
  },

  rateInnerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  durMain: {
    fontFamily: "PoppinsBold",
    fontSize: 15,
    color: Colors.Secondary,
  },
  durSub: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    color: Colors.darkMode,
  },
  rateMain: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    color: Colors.gray,
  },
  rateSub: {
    fontSize: 12,
    fontFamily: "PoppinsBold",
    color: Colors.green,
  },
  divider: {
    height: 0.3,
    backgroundColor: Colors.green,
    marginHorizontal: 12,
    marginTop: 8,
  },
  interestSubContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: "90%",
    height: 101,
    alignSelf: "center",
    padding: 20,
    gap: 5,
    alignContent: "center",
    marginBottom: 50,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  checkboxContainer: {},
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 4,
  },
});
