import { Stack } from "expo-router";

const account = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myProfile" />
    </Stack>
  );
};
export default account;
