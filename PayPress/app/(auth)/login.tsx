import React, { useState } from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import CustonButton1 from "@/components/CustomButton1";
import eyeOpen from "@/assets/images/visible.png";
import eyeClosed from "@/assets/images/hide.png";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = () => {
    if (!email || !password) {
      setError("Invalide Entry. Try Again.");
      return;
    }
    setError("");
    // Continue registration logic...
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        {/* Back Icon */}
        <TouchableOpacity
          style={{
            padding: 15,
          }}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={35}
            color={Colors.darkMode}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "left",
            fontFamily: "PoppinsExtraBold",
            fontSize: 18,
            // marginTop: 50,
            marginHorizontal: 20,
          }}
        >
          Welcome onboard!
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontFamily: "PoppinsRegular",
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        >
          Register to start saving and investing with PAYpress today!
        </Text>
        <View style={styles.mainContainer}>
          <View style={{ marginTop: 20 }}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email address"
              placeholderTextColor={Colors.darkMode}
              autoCorrect={false}
              style={{
                width: "90%",
                height: 50,
                borderRadius: 10,
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                marginTop: 20,
                alignSelf: "center",
                padding: 10,
              }}
            />
            <View>
              <Ionicons
                name="lock-closed-outline"
                size={22}
                color="gray"
                style={{
                  position: "absolute",
                  left: 18,
                  top: 32,
                  zIndex: 1,
                  marginHorizontal: 10,
                }}
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor={Colors.darkMode}
                autoCorrect={false}
                style={{
                  width: "90%",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: Colors.white,
                  paddingHorizontal: 20,
                  marginTop: 20,
                  alignSelf: "center",
                  paddingLeft: 40,
                  marginBottom: 50,
                }}
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
          </View>

          <CustonButton1
            text={"LOG IN"}
            onPress={() => {
              // handle login action here
              handleRegister();
              if (email && password) {
                // router.navigate("/Home");
                router.navigate("/Home");
              }
            }}
            color={Colors.Secondary}
          />

          <TouchableOpacity
            style={{ marginTop: 20, alignSelf: "center", marginBottom: 20 }}
          >
            <Text style={{ color: Colors.white }}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustonButton1
            onPress={() => {
              router.navigate("./Loginbiometrics");
            }}
            text={
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    color: Colors.darkMode,
                    fontFamily: "PoppinsBold",
                    fontSize: 16,
                  }}
                >
                  Log in with Biometrics
                </Text>

                <Image
                  source={require("../../assets/images/fingerprint-scan.png")}
                  style={{ resizeMode: "contain", height: 24, width: 24 }}
                />
              </View>
            }
            color={Colors.white}
          />

          {/* signup text */}
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: Colors.white }}>Not yet Registered?</Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/signUp");
              }}
            >
              <Text style={{ color: Colors.white, fontFamily: "PoppinsBold" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
