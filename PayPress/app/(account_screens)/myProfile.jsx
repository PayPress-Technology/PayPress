import React from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import InputField from "@/components/InputField";
import CustonButton1 from "@/components/CustomButton1";
import { useState } from "react";
import eyeOpen from "@/assets/images/visible.png";
import eyeClosed from "@/assets/images/hide.png";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function My_savings() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ThemedText style={styles.headingTxt}>My Profile</ThemedText>

        <View style={styles.profileDash}>
          <ThemedText
            style={{
              color: Colors.white,
              // paddingTop: 3,
              fontSize: 18,
              fontFamily: "PoppinsSemiBold",
            }}
          >
            My Profile
          </ThemedText>

          <View style={styles.profileContainer}>
            {/* Profile Image */}
            <View style={styles.ImgContainer}>
              <Image />

              {/* side camera button */}
              <TouchableOpacity style={styles.cameraImgContainer}>
                <Image
                  style={styles.cameraImg}
                  source={require("../../assets/images/profile-camera.png")}
                />
              </TouchableOpacity>
            </View>

            {/* Profile ThemedText */}
            <View>
              <ThemedText style={styles.profileTxt}>
                Change Profile Photo{"\n"}
                Upload a new photo or take {"\n"}
                one with your camera
              </ThemedText>
            </View>
          </View>
        </View>
        {/* end */}

        <ScrollView showsVerticalScrollIndicator={false}>
          {/*  */}
          <ThemedText
            style={[styles.headingTxt, { fontFamily: "PoppinsMedium" }]}
          >
            Personal Information
          </ThemedText>
          {/* input fields */}
          <View style={{ marginHorizontal: 20 }}>
            <InputField
              mainTxt={"User ID"}
              holder={"167777d107"}
              txtType={"default"}
              edit={true}
            />
            <InputField
              mainTxt={"Full Name"}
              holder={"John Doe"}
              txtType={"default"}
              edit={true}
            />
            <InputField
              mainTxt={"Email Address"}
              holder={"johndoe@email.com"}
              txtType={"email-address"}
              edit={true}
              valueTxt={email}
              onChangeTxt={setEmail}
            />
            {/*  start*/}
            <View>
              <ThemedText style={styles.mainTxt}>Password</ThemedText>
              <TextInput
                value={password}
                onChangeThemedText={setPassword}
                secureThemedTextEntry={!showPassword}
                keyboardType="default"
                autoCapitalize="none"
                placeholder="********"
                placeholderTextColor={Colors.gray}
                autoCorrect={false}
                style={styles.input}
              />
              {error ? (
                <ThemedText
                  style={{
                    color: Colors.Secondary,
                    ThemedTextAlign: "center",
                    padding: 10,
                  }}
                >
                  {error}
                </ThemedText>
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
            {/* end */}
            <InputField
              mainTxt={"Phone Number"}
              holder={"09057716700"}
              txtType={"number-pad"}
              edit={true}
            />
          </View>

          {/* button */}
          <View style={{ marginBottom: 250, marginTop: 20 }}>
            <CustonButton1
              text={"Edit Profile"}
              onPress={() => {
                if (!email || !email.includes("@gmail.com")) {
                  alert("Please enter a valid email address");
                  return;
                }

                if (!password.trim()) {
                  alert("Enter Password");
                  return;
                }
                router.push("/profile");
              }}
              color={Colors.Primary}
              TxtColor={Colors.white}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}
const styles = StyleSheet.create({
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    paddingLeft: 15,
    paddingVertical: 10,
    // color: Colors.darkMode,
  },
  profileDash: {
    width: "95%",
    height: 167,
    backgroundColor: Colors.Primary,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    // alignItems: "center",
    alignSelf: "center",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    marginHorizontal: 5,
  },
  ImgContainer: {
    height: 76,
    width: 76,
    backgroundColor: Colors.Secondary,
    borderRadius: 100,
  },
  profileTxt: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  cameraImgContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  cameraImg: {
    height: 24,
    width: 24,
  },
  mainTxt: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    padding: 5,
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
});
