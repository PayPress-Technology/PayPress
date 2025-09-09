import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const PinInputScreen = ({ onPinComplete }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const { originalPin } = useLocalSearchParams();
  const maxLength = 5; // 6-digit PIN

  const handleNumberPress = (number) => {
    if (pin.length < maxLength) {
      setPin(pin + number);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleEnter = () => {
    if (pin == originalPin) {
      // setPin(pin + number);
      router.push("/biometricsSetup");
    } else {
      // Error when PINs don't match
      setError("PINs do not match. Please try again.");
    }
    // if (onPinComplete) {
    //   onPinComplete(pin);
    // }
    setPin("");
  };

  const renderPinInput = () => {
    const inputs = [];
    for (let i = 0; i < maxLength; i++) {
      inputs.push(
        <View key={i} style={styles.pinDot}>
          {pin[i] ? (
            <Text style={styles.pinNumber}>{pin[i]}</Text>
          ) : (
            <Text style={styles.pinDash}>-</Text>
          )}
        </View>
      );
    }
    return inputs;
  };

  const dialpadNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["enter", 0, "back"],
  ];

  // Check if PIN is complete for enter button
  const isPinComplete = pin.length === maxLength;

  return (
    <SafeAreaView style={styles.container}>
      {/* Error message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={{ backgroundColor: Colors.white }}>
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

        {/*  */}
        {/* Main Page */}
        {/* Header */}
        <Text
          style={{
            textAlign: "left",
            fontFamily: "PoppinsExtraBold",
            fontSize: 18,
            // marginTop: 50,
            marginHorizontal: 20,
          }}
        >
          Confirm your 5-digit PIN
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontFamily: "PoppinsRegular",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          Retype the Paycoin PIN you entered earlier to confirm.
        </Text>
      </View>
      <View style={styles.content}>
        {/* PIN Input Display */}
        <View style={styles.pinContainer}>
          <View style={styles.pinInputRow}>{renderPinInput()}</View>
        </View>

        {/* Custom Dialpad */}
        <View style={styles.dialpad}>
          {dialpadNumbers.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.dialpadRow}>
              {row.map((item, itemIndex) => {
                if (item === "enter") {
                  return (
                    <TouchableOpacity
                      key={itemIndex}
                      style={[
                        styles.dialpadButton,
                        isPinComplete
                          ? styles.enterButtonActive
                          : styles.enterButtonDisabled,
                      ]}
                      onPress={handleEnter}
                      disabled={!isPinComplete}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.enterText,
                          isPinComplete
                            ? styles.enterTextActive
                            : styles.enterTextDisabled,
                        ]}
                      >
                        ✓
                      </Text>
                    </TouchableOpacity>
                  );
                }

                if (item === "back") {
                  return (
                    <TouchableOpacity
                      key={itemIndex}
                      style={styles.dialpadButton}
                      onPress={handleBackspace}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.backspaceText}>←</Text>
                    </TouchableOpacity>
                  );
                }

                return (
                  <TouchableOpacity
                    key={itemIndex}
                    style={styles.dialpadButton}
                    onPress={() => handleNumberPress(item.toString())}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.dialpadText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* Step Indicator */}
        <Text style={styles.stepText}>Step 3</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white, // Blue background
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: Colors.Primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headerText: {
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    marginBottom: 40,
    fontWeight: "500",
  },
  pinContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  pinInputRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  pinDot: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pinNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  pinDash: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#CCCCCC",
  },
  dialpad: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dialpadRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 30,
  },
  dialpadButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyButton: {
    width: 70,
    height: 70,
  },
  dialpadText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  backspaceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  stepText: {
    color: Colors.white,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  enterButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 30,
    minWidth: 120,
  },
  enterButtonActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  enterButtonDisabled: {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
  },
  enterButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  enterButtonTextActive: {
    color: "#1E88E5",
  },
  enterButtonTextDisabled: {
    color: "#CCCCCC",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    // marginBottom: 20,
    fontFamily: "PoppinsRegular",
  },
});

export default PinInputScreen;
