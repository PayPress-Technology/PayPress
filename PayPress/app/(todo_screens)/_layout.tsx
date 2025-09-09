import { Stack } from "expo-router";

const toDoScreens = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="addBVN" />
      <Stack.Screen name="linkBank" />
    </Stack>
  );
};
export default toDoScreens;
