import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";
import { useState } from "react";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function ForgotPasswprd() {
  const [mail, setMail] = useState("");

  return (
    <ThemedContainer>
      {/* Back Icon */}
      <TouchableOpacity
        style={{
          padding: 10,
        }}
        onPress={() => router.back()}
      >
        <Ionicons
          name="arrow-back-circle-outline"
          size={35}
          color={Colors.darkMode}
        />
      </TouchableOpacity>

      <View style={style.container}>
        {/*  */}
        <View>
          <ThemedText style={style.mainTxt}>Forgot Password?</ThemedText>
          <ThemedText style={style.subTxt}>
            Please enter your Paycoin email below
          </ThemedText>
        </View>

        {/* email input */}

        <View style={style.inputCont}>
          <ThemedText style={style.mainT}>Email Address</ThemedText>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your Email Address"
            placeholderTextColor="#7F7F7F"
            autoCorrect={false}
            style={style.input}
            value={mail}
            onChangeText={setMail}
          />
        </View>

        {/* button */}
        <CustonButton1
          color={Colors.Primary}
          text={"Send Code"}
          TxtColor={Colors.white}
          onPress={() => {
            if (!mail || !mail.includes("@gmail.com")) {
              alert("Please enter a valid email address");
              return;
            }
            router.push({
              pathname: "/creatNewPassword",
              params: { originalMail: mail },
            });
          }}
        />
      </View>
    </ThemedContainer>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  mainTxt: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
    textAlign: "center",
    // color: Colors.darkMode,
  },
  mainT: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    padding: 5,
  },
  subTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
  },
  input: {
    width: "99%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    alignSelf: "center",
    padding: 10,
    marginBottom: 15,
  },
  inputCont: {
    marginVertical: 20,
  },
});
