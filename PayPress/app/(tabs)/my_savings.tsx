import React from "react";
import { Image } from "expo-image";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function my_savings() {
  return (
    <SafeAreaView>
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
          textAlign: "center",
        }}
      >
        Welcome to savings!!!
      </Text>
    </SafeAreaView>
  );
}
