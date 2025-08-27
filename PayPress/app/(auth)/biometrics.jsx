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

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";

export default function FingerprintSetup() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      setError("Biometric authentication not available.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Setup Fingerprint Authentication",
      fallbackLabel: "Use PIN instead",
    });

    if (result.success) {
      setError("");
      setIsSetupComplete(true);
      // Optional: Show success message
      console.log("Fingerprint setup successful!");
    } else {
      setError("Setup failed. Please try again.");
      setIsSetupComplete(false);
    }
  };

  const handleContinue = () => {
    // Navigate to next screen after fingerprint setup
    router.navigate("/NextScreen"); // Replace with your actual next screen route
    // or router.push("/NextScreen");
  };

  const handleSkip = () => {
    // Allow user to skip fingerprint setup
    router.navigate("/NextScreen"); // Same destination, but without fingerprint setup
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <View style={styles.mainContainer}>
          <View style={styles.bioTxtContainer}>
            <Text style={styles.bioTxt}>Fingerprint</Text>
            <Text style={styles.bioTxtSub}>
              Place your Finger on the {"\n"} Fingerprint sensor
            </Text>
          </View>
          <View style={styles.fingerprintSection}>
            <TouchableOpacity onPress={handleBiometricAuth}>
              <Ionicons
                name="finger-print-outline"
                size={120}
                color={isSetupComplete ? "#4CAF50" : "#fff"}
                style={styles.fingerprintIcon}
              />
            </TouchableOpacity>

            {/* Status Messages */}
            {isSetupComplete && (
              <Text style={styles.successText}>
                ✓ Fingerprint setup complete!
              </Text>
            )}

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
          {/* Action Buttons */}0
          <View style={styles.buttonContainer}>
            {isSetupComplete ? (
              <CustonButton1
                text={"Continue"}
                // onPress={handleContinue}
                onPress={() => router.push("/Home")}
                color={Colors.Secondary}
              />
            ) : (
              <>
                <CustonButton1
                  text={"Setup Fingerprint"}
                  onPress={handleBiometricAuth}
                  color={Colors.Secondary}
                />
                {/* <TouchableOpacity
                  style={styles.skipButton}
                  onPress={handleSkip}
                >
                  <Text style={styles.skipText}>Skip for now</Text>
                </TouchableOpacity> */}
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "90%",
    height: "85%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: "10%",
    paddingVertical: 30,
  },
  bioTxtContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bioTxt: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: "#fff",
    textAlign: "center",
  },
  bioTxtSub: {
    fontFamily: "PoppinsRegular",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  fingerprintSection: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  fingerprintIcon: {
    alignSelf: "center",
    marginVertical: 30,
  },
  successText: {
    color: "#4CAF50",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    marginTop: 20,
  },
  errorText: {
    color: "#FF5252",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    marginTop: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  skipButton: {
    paddingVertical: 15,
    alignItems: "center",
  },
  skipText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    textDecorationLine: "underline",
  },
  cancelButton: {
    marginTop: 10,
  },
});
