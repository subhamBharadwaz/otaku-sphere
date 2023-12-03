import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "It's Fun Time!",
        }}
      />
      <Stack.Screen
        name="anime/[id]"
        options={{
          headerTitle: 'Details',
        }}
      />
    </Stack>
  );
}
