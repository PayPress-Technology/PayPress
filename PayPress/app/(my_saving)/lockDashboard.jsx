import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Bar } from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";

export default function LockDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to lock Dashboard</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
