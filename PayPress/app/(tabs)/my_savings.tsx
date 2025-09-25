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
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import SavingType from "@/components/SavingType";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function MySavings() {
  const [autoDebitEnabled, setAutoDebitEnabled] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const accntBalance = " ₦25,000.00";
  const [valueTxt, setValueTxt] = useState("");

  const toggleAutoDebitEnabled = () => {
    setAutoDebitEnabled((previousState) => !previousState);
  };

  return (
    <ThemedContainer style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={80} // adjust if header overlaps
      >
        <ThemedText style={style.headingTxt}>Create Saving Plan</ThemedText>

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
                  {accntBalance}
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
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.savingTypeContainer}>
            <ThemedText
              style={[style.headingTxt, { fontSize: 16, paddingRight: 20 }]}
            >
              Select Saving Type
            </ThemedText>
            {/* types */}
            <View style={style.dash_Container}>
              {/* 1st two */}
              <View style={style.savingTypes}>
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Health Savings")}
                  text={"Health Savings"}
                  text2={"4.5% APY"}
                  imageIcon={require("../../assets/images/health.png")}
                  active={selectedType === "Health Savings"}
                />
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Rent Savings")}
                  text={"Rent Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/rentSavings.png")}
                  active={selectedType === "Rent Savings"}
                />
              </View>

              {/* 2nd  */}
              <View style={style.savingTypes}>
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Education Savings")}
                  text={"Education Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/education_savings.png")}
                  active={selectedType === "Education Savings"}
                />
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Real Estate Savings")}
                  text={"Real Estate Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/real_estate.png")}
                  active={selectedType === "Real Estate Savings"}
                />
              </View>

              {/*3rd   */}
              <View style={style.savingTypes}>
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Wedding Savings")}
                  text={"Wedding Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/weddinig_savings.png")}
                  active={selectedType === "Wedding Savings"}
                />
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Travelling Savings")}
                  text={"Travelling Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/traveling_savings.png")}
                  active={selectedType === "Travelling Savings"}
                />
              </View>

              {/* 4th */}
              <View style={style.savingTypes}>
                <SavingType
                  // onPress={() => router.push("/my_savings")}
                  onPress={() => setSelectedType("Agriculture Savings")}
                  text={"Agriculture Savings"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/agric_savings.png")}
                  active={selectedType === "Agriculture Savings"}
                />

                <SavingType
                  onPress={() => {
                    setShowCustomForm((prev) => !prev);
                    setSelectedType("Customize Savings");
                  }}
                  text={"Customize Savings\nPlan"}
                  text2={"3.8% APY"}
                  imageIcon={require("../../assets/images/custom_savings.png")}
                  active={selectedType === "Customize Savings"}
                />
              </View>

              {/* Fields */}
              <View style={{ marginTop: 20 }}>
                <InputField
                  mainTxt={selectedType}
                  holder={selectedType}
                  txtType={"default"}
                  edit={false}
                  valueTxt={valueTxt}
                  onChangeTxt={setValueTxt}
                />

                <InputField
                  mainTxt={"Target Amount (₦)"}
                  holder={accntBalance}
                  txtType={"numeric"}
                  edit={false}
                  valueTxt={valueTxt}
                  onChangeTxt={setValueTxt}
                />
              </View>
            </View>
            {/* Customizing forms */}{" "}
            {showCustomForm && (
              <View style={style.inputContainer}>
                <InputField
                  mainTxt={"Duration (Months)"}
                  holder={"How many months to save?"}
                  txtType={"numeric"}
                  edit={true}
                  valueTxt={valueTxt}
                  onChangeTxt={setValueTxt}
                />

                <InputField
                  mainTxt={"Monthly Debit"}
                  holder={"How much should be debited monthly?"}
                  txtType={"numeric"}
                  edit={true}
                  valueTxt={valueTxt}
                  onChangeTxt={setValueTxt}
                />
              </View>
            )}
            {/* interest screen */}
            <View style={style.interestContainer}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "PoppinsBold",
                  marginHorizontal: 5,
                }}
              >
                Expected Returns
              </Text>
              <View style={style.rateInnerCont}>
                {/* rates */}
                <Text style={style.rateMain}>
                  Interest Rate {"\n"}
                  <Text style={style.rateSub}>4.5%</Text>
                </Text>

                {/* returns */}
                <Text style={style.rateMain}>
                  Expected Returns {"\n"}
                  <Text style={style.rateSub}>₦2,500</Text>
                </Text>
              </View>
              {/*  */}
              <View style={style.divider}></View>
              <Text style={[style.rateMain, { marginHorizontal: 10 }]}>
                Monthly Contribution:
              </Text>
            </View>
            {/*  */}
            <View style={[style.dashContainer, { marginTop: 20 }]}>
              {/* text */}
              <View>
                <ThemedText
                  style={{
                    fontSize: 14,
                    marginBottom: 10,
                    fontFamily: "PoppinsMedium",
                  }}
                >
                  Enable Auto Debit
                </ThemedText>
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
            <View style={{ marginTop: 20 }}>
              <CustonButton1
                color={Colors.Primary}
                text={"Create a Saving Plan"}
                TxtColor={Colors.white}
                onPress={() => {
                  router.push("../savingsDashboard");
                }}
              />
            </View>
          </View>
        </ScrollView>
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
    marginHorizontal: 10,
  },
  savingTypes: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    marginTop: 10,
  },
  scroll: {},
  button: {
    padding: 10,
    width: "80%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  mainTxt: {
    fontSize: 16,
    fontFamily: "PoppinsBold",

    color: Colors.white,
  },
  interestContainer: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    width: "80%",
    height: 158,
    alignSelf: "center",
    padding: 10,
    gap: 15,
    alignContent: "center",
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  rateInnerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  rateMain: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.green,
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
});
