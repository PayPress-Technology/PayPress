import React from "react";
import { Image } from "expo-image";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function Investment() {
  return (
    <ThemedContainer>
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
          color={Colors.gray}
        />
      </TouchableOpacity>
      <ThemedText
        style={{
          textAlign: "center",
        }}
      >
        Welcome to Investment Page!!!
      </ThemedText>
    </ThemedContainer>
  );
}
