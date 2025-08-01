import React from "react";
import { Image } from "expo-image";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Welcome to PayPress
      </Text>
    </SafeAreaView>
  );
}
