import { Stack } from "expo-router";

const toDoScreens = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="addBVN" />
    </Stack>
  );
};
export default toDoScreens;
