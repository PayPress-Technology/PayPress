import React from "react";
import { View, ViewProps, StyleSheet, StatusBar } from "react-native";
import { useThemeContext } from "../app/ThemeContext";
import { useThemeColors } from "../hooks/useThemeColors";
import { SafeAreaView } from "react-native-safe-area-context";

interface ThemedContainerProps extends ViewProps {
  children: React.ReactNode;
}

export default function ThemedContainer({
  style,
  children,
  ...props
}: ThemedContainerProps) {
  const { isDark } = useThemeContext();
  const { colors } = useThemeColors();

  return (
    <>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
