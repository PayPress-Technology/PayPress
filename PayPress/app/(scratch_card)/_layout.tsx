import { Stack } from "expo-router";

const scratchCard = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="scratchCard" />
      <Stack.Screen name="jamb" />
      <Stack.Screen name="waec" />
      <Stack.Screen name="neco" />
    </Stack>
  );
};
export default scratchCard;
