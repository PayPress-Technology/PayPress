import { Stack } from "expo-router";

const Electricity_Bills = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="electricityBills" />
    </Stack>
  );
};
export default Electricity_Bills;
