import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import CustomSplashScreen from "../components/CustomSplashScreen";

// Prevent auto hide of splash screen
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        
        // Any other initialization tasks can go here
        
        // When everything is ready, set appIsReady to true
        if (loaded) {
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [loaded]);

  useEffect(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // If the app is not ready yet, show our custom splash screen
    return <CustomSplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(invest_money)" />
      <Stack.Screen name="(my_savings)" />
      <Stack.Screen name="(start_savings)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(transaction_screens)" />
      <Stack.Screen name="(account)" />
      <Stack.Screen name="index" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="mySavings" />
    </Stack>
  );
}
