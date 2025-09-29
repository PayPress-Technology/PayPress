import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  router,
  StyleSheet,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustonButton1 from "@/components/CustomButton1";
import { Ionicons } from "@expo/vector-icons";
import DropdownField from "../../components/DropDown";
import InputField from "@/components/InputField";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Jamb() {
  const [PhoneNumer, setPhoneNumber] = React.useState("");
  const [profileCode, setProfileCode] = React.useState("");
  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={style.headContainer}>
              {/* Back Icon */}
              <TouchableOpacity
                style={{
                  padding: 15,
                }}
                onPress={() => router.back()}
              >
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={30}
                  color={Colors.gray}
                />
              </TouchableOpacity>

              {/* header */}
              <ThemedText style={style.Headtxt}>Jamb</ThemedText>
            </View>

            {/* JAMB */}

            <View>
              <View style={style.mainContainer}>
                <Image
                  source={require("../../assets/images/JAMB.png")}
                  style={style.Img}
                />

                <ThemedText style={style.mainPinTxt}>
                  JAMB {"\n"}
                  <Text style={style.subPinTxt}>JAMB</Text>
                </ThemedText>
              </View>
            </View>

            {/* End */}

            {/* fields */}
            <View>
              <DropdownField
                label="Service Type"
                value="No Data"
                onPress={() => {}}
              />
            </View>

            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
              <InputField
                mainTxt="Profile code"
                holder="Enter Candidate confirmation code"
                edit={true}
                txtType="default"
                //   valueTxt={email}
                //   onChangeTxt={setEmail}
              />
              <InputField
                mainTxt={"Phone Number"}
                holder={"09057716700"}
                txtType={"number-pad"}
                edit={true}
              />
            </View>

            {/* button */}
            <View style={{ marginTop: 40 }}>
              <CustonButton1
                text={"Get Details"}
                onPress={() => {
                  if (!profileCode.trim()) {
                    alert("Enter profile code");
                    return;
                  }

                  if (!PhoneNumer.trim()) {
                    alert("Enter phone number");
                    return;
                  }
                  //   router.push("/profile");
                }}
                color={Colors.Primary}
                TxtColor={Colors.white}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}

const style = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  Headtxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    // color: Colors.darkMode,
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
    // color: Colors.darkMode,
  },
  subPinTxt: {
    fontFamily: "PoppinsMedium",
    color: Colors.green,
    fontSize: 10,
  },
});
