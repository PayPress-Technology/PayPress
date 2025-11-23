import { Stack } from "expo-router";

const account = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myProfile" />
      <Stack.Screen name="verifyNIN" />
      <Stack.Screen name="contactUs" />
    </Stack>
  );
};
export default account;
