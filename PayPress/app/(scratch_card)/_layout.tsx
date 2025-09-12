import { Stack } from "expo-router";

const scratchCard = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="scratchCard" />
    </Stack>
  );
};
export default scratchCard;
