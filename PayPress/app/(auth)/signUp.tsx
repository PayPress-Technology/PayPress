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
import { ScrollView } from "react-native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !password) {
      setError("All fields except referral code are required.");
      return;
    }
    setError("");
    // Continue registration logic...
  };

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 50 }}>
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

        {/* Main Page */}
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

        <ScrollView style={{ marginBottom: 100 }}>
          <View style={styles.mainContainer}>
            <View style={{ marginVertical: 1 }}>
              <View>
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  keyboardType="default"
                  autoCapitalize="none"
                  placeholder="First name (Surname)"
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
                    color: Colors.darkMode,
                    marginVertical: 20,
                  }}
                />
              </View>

              <View>
                <TextInput
                  value={lastName}
                  onChangeText={setLastName}
                  keyboardType="default"
                  autoCapitalize="none"
                  placeholder="Last name "
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
                    color: Colors.darkMode,
                    marginVertical: 20,
                  }}
                />
              </View>

              <View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Email Address"
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
                    color: Colors.darkMode,
                    marginVertical: 20,
                  }}
                />
              </View>

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
                    // marginBottom: 50,
                    marginVertical: 20,
                  }}
                />
                {error ? (
                  <Text style={{ color: "red", textAlign: "center" }}>
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
              <TextInput
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Ener referral code (optional)"
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
                  color: Colors.darkMode,
                  // marginVertical: 20,
                  marginBottom: 50,
                }}
              />
            </View>

            <CustonButton1
              text={"Continue"}
              onPress={() => {
                // handle login action here
                router.navigate("./createPin");
              }}
              color={Colors.Secondary}
            />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", marginBottom: 20 }}>Step 1</Text>
            </View>
          </View>
        </ScrollView>
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
    marginVertical: 20,
  },
});
