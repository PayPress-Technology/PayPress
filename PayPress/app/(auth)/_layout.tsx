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
      <Stack.Screen name="forgotPassword" />
      <Stack.Screen name="creatNewPassword" />
    </Stack>
  );
};
export default AuthScreens;
