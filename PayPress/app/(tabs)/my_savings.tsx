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
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import SavingType from "@/components/SavingType";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";

export default function MySavings() {
  const [autoDebitEnabled, setAutoDebitEnabled] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);

  const toggleAutoDebitEnabled = () => {
    setAutoDebitEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={style.headingTxt}>Create Saving Plan</Text>

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
          Select Saving Type
        </Text>

        <ScrollView
          style={{ marginBottom: 250 }}
          showsVerticalScrollIndicator={false}
        >
          {/* types */}
          <View style={style.dash_Container}>
            {/* 1st two */}
            <View style={style.savingTypes}>
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Health Savings"}
                text2={"4.5% APY"}
                imageIcon={require("../../assets/images/health.png")}
              />
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Rent Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/rentSavings.png")}
              />
            </View>

            {/* 2nd  */}
            <View style={style.savingTypes}>
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Education Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/education_savings.png")}
              />
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Real Estate Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/real_estate.png")}
              />
            </View>

            {/*3rd   */}
            <View style={style.savingTypes}>
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Wedding Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/weddinig_savings.png")}
              />
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Travelling Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/traveling_savings.png")}
              />
            </View>

            {/* 4th */}
            <View style={style.savingTypes}>
              <SavingType
                onPress={() => router.push("/my_savings")}
                text={"Agriculture Savings"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/agric_savings.png")}
              />
              <SavingType
                onPress={() => setShowCustomForm((prev) => !prev)}
                text={"Customize Savings Plan"}
                text2={"3.8% APY"}
                imageIcon={require("../../assets/images/custom_savings.png")}
              />
            </View>
          </View>

          {/* Customizing forms */}
          {showCustomForm && (
            <View style={style.inputContainer}>
              <InputField
                mainTxt={"Customise Plan Name"}
                holder={"Enter your customise plan name"}
                txtType={"default"}
              />

              <InputField
                mainTxt={"Target Amount (₦)"}
                holder={"How much do you want to save?"}
                txtType={"numeric"}
              />

              <InputField
                mainTxt={"Duration (Months)"}
                holder={"How many months to save?"}
                txtType={"numeric"}
              />

              <InputField
                mainTxt={"Monthly Debit"}
                holder={"How much should be debited monthly?"}
                txtType={"numeric"}
              />
            </View>
          )}

          <View style={[style.dashContainer, { marginTop: 20 }]}>
            {/* text */}
            <View>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 10,
                  fontFamily: "PoppinsMedium",
                }}
              >
                Enable Auto Debit
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 14,
                  color: "#7F7F7F",
                }}
              >
                Automatically deduct monthly Amount
              </Text>
            </View>

            {/* switch icon */}
            <View>
              <Switch
                style={style.switch}
                trackColor={{ false: "#E0E0E0", true: "#0B57BD" }}
                thumbColor={autoDebitEnabled ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
                onValueChange={toggleAutoDebitEnabled}
                value={autoDebitEnabled}
              />
            </View>
          </View>

          {/* button */}
          <TouchableOpacity
            onPress={() => {
              router.push("../savingsDashboard");
            }}
            style={[
              style.button,
              { backgroundColor: Colors.Primary, marginTop: 20 },
            ]}
          >
            <Text style={style.mainTxt}>Create a Saving Plan</Text>
          </TouchableOpacity>
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
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});
