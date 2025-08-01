import { Stack } from "expo-router";

const AuthScreens = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mySavings" />
    </Stack>
  );
};
export default AuthScreens;
