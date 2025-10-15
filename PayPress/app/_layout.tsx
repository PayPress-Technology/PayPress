import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { ThemeProvider } from "./ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import ThemedContainer from "@/components/ThemedContainer";
import Tabs from "expo-router";

// import CustomSplashScreen from "../components/CustomSplashScreen";

// Prevent auto hide of splash screen
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    // Don't hide splash screen here - let it stay visible
    return null;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(invest_money)" />
        <Stack.Screen name="(my_savings)" />
        <Stack.Screen name="(start_savings)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(transaction_screens)" />
        <Stack.Screen name="(account_screens)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="mySavings" />
        <Stack.Screen name="(scratch_card)" />
        <Stack.Screen name="(todo_screens)" />
        <Stack.Screen name="(aitime&data)" />
      </Stack>
    </ThemeProvider>
  );
}
