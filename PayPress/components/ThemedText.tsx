import React from "react";
import { Text, TextProps } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import { Colors } from "@/constants/Colors";

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
}

export default function ThemedText({
  lightColor = Colors.darkMode,
  darkColor = Colors.white,
  style,
  ...props
}: ThemedTextProps) {
  const { colors } = useThemeColors();

  return (
    <Text
      style={[
        {
          color: colors.text,
        },
        style,
      ]}
      {...props}
    />
  );
}
