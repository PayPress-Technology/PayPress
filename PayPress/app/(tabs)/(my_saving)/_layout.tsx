import { Stack } from "expo-router";

const mySavings = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mySavings" />
      <Stack.Screen name="savingPlan" />
      <Stack.Screen name="lockFund" />
      <Stack.Screen name="lockDashboard" />
      <Stack.Screen name="fundWallet" />
      <Stack.Screen name="fundSuccess" />
    </Stack>
  );
};
export default mySavings;
