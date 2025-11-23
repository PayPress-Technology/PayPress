import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { useThemeContext } from "../ThemeContext";
import ThemedContainer from "@/components/ThemedContainer";

export default function TabLayout() {
  const { isDark, theme } = useThemeContext();

  return (
    <ThemedContainer>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.Primary,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
              backgroundColor: isDark ? "#121212" : "#FFFFFF",
            },
            default: {
              backgroundColor: isDark ? "#121212" : "#FFFFFF",
            },
          }),
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/home-active.png")
                    : require("../../assets/images/home-outline.png")
                }
                style={{
                  width: 24,
                  height: 24,
                  // tintColor: color, // This applies the active/inactive color
                }}
                contentFit="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="savingsDashboard"
          options={{
            title: "My Savings",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/wallet-active.png")
                    : require("../../assets/images/wallet-outline.png")
                }
                style={{
                  width: 24,
                  height: 24,
                  // tintColor: color, // This applies the active/inactive color
                }}
                contentFit="contain"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="my_savings"
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: Colors.Primary,
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 5,
                }}
              >
                <Ionicons
                  name={focused ? "add" : "add-outline"}
                  size={30}
                  color={Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="investment"
          options={{
            title: "investment",
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/investment-active.png")
                    : require("../../assets/images/investment-outline.png")
                }
                style={{
                  width: 24,
                  height: 24,
                  //  tintColor: color, // This applies the active/inactive color
                }}
                contentFit="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/images/profile-active.png")
                    : require("../../assets/images/profile-outline.png")
                }
                style={{
                  width: 24,
                  height: 24,
                  // tintColor: color, // This applies the active/inactive color
                }}
                contentFit="contain"
              />
            ),
          }}
        />

        {/* this wont show on tabs */}
        <Tabs.Screen name="(account_screens)" options={{ href: null }} />
        <Tabs.Screen name="(airtime&data)" options={{ href: null }} />
        <Tabs.Screen name="(electricityBills)" options={{ href: null }} />
        <Tabs.Screen name="(my_saving)" options={{ href: null }} />
        <Tabs.Screen name="(scratch_card)" options={{ href: null }} />
        <Tabs.Screen name="(Gotv&Dstv)" options={{ href: null }} />
        <Tabs.Screen name="(todo_screens)" options={{ href: null }} />
      </Tabs>
    </ThemedContainer>
  );
}
