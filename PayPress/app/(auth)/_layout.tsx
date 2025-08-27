import { Stack } from "expo-router";

const AuthScreens = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="biometrics" />
      <Stack.Screen name="biometricsSetup" />
      <Stack.Screen name="transactionScreen" />
      <Stack.Screen name="confirmTransactionScreen" />
      <Stack.Screen name="Loginbiometrics" />
    </Stack>
  );
};
export default AuthScreens;
