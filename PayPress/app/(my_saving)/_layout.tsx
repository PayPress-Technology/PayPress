import { Stack } from "expo-router";

const mySavings = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mySavings" />
      <Stack.Screen name="savingPlan" />
      <Stack.Screen name="lockFund" />
    </Stack>
  );
};
export default mySavings;
