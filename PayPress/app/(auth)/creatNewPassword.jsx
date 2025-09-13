import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";
import eyeOpen from "@/assets/images/visible.png";
import eyeClosed from "@/assets/images/hide.png";
import React, { useState } from "react";
import { Image } from "expo-image";

export default function CreateNewPasswprd() {
  const { originalMail } = useLocalSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={80} // adjust if header overlaps
      >
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
            <Text style={style.mainTxt}>Check your email</Text>
            <Text style={style.subTxt}>
              Enter the 6 digit reset code Paycoin sent to{"\n"}
              <Text style={style.mailTxt}> {originalMail}</Text> and create a
              new password.
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            {/* email input */}
            <View style={{ marginTop: 20 }}>
              <InputField
                mainTxt={"Enter RESET CODE"}
                holder={"123456"}
                txtType={"email-address"}
                edit={true}
              />
            </View>

            <View>
              {/* password */}
              <Text style={style.mainT}>Enter New Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="**********"
                placeholderTextColor={Colors.darkMode}
                autoCorrect={false}
                style={style.input}
              />
              {error ? (
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {error}
                </Text>
              ) : null}

              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 20,
                  top: 30,
                  padding: 5,
                }}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Image
                  source={showPassword ? eyeOpen : eyeClosed}
                  style={{
                    width: 24,
                    height: 24,
                    alignSelf: "center",
                    justifyContent: "center",
                    tintColor: "gray",
                  }}
                  contentFit="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <View>
              {/* Confirm password */}
              <Text style={style.mainT}>Confirm New Password</Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="**********"
                placeholderTextColor={Colors.darkMode}
                autoCorrect={false}
                style={style.input}
              />
              {error ? (
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {error}
                </Text>
              ) : null}

              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 20,
                  top: 30,
                  padding: 5,
                }}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Image
                  source={showPassword ? eyeOpen : eyeClosed}
                  style={{
                    width: 24,
                    height: 24,
                    alignSelf: "center",
                    justifyContent: "center",
                    tintColor: "gray",
                  }}
                  contentFit="contain"
                />
              </TouchableOpacity>
            </View>

            {/* button */}
            <CustonButton1
              color={Colors.Primary}
              text={"Create New Password"}
              TxtColor={Colors.white}
              onPress={() => {
                if (!password.trim() || !confirmPassword.trim()) {
                  alert("Form not complete! Try again");
                  return;
                }
                if (password !== confirmPassword) {
                  alert("Password mismatch!, try again");
                  return;
                }
                router.navigate("/Home");
              }}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    color: Colors.darkMode,
  },
  subTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
  },
  mailTxt: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    textAlign: "center",
    color: Colors.darkMode,
  },
  input: {
    width: "99%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    alignSelf: "center",
    padding: 10,
    marginBottom: 20,
  },
  mainT: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    padding: 5,
  },
});
