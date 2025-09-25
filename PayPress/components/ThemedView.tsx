import React from 'react';
import { View, ViewProps } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

interface ThemedViewProps extends ViewProps {
  lightBg?: string;
  darkBg?: string;
}

export default function ThemedView({
  lightBg = '#FFFFFF',
  darkBg = '#121212',
  style,
  ...props
}: ThemedViewProps) {
  const { colors } = useThemeColors();

  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
        },
        style,
      ]}
      {...props}
    />
  );
}
