import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Your Favorites',
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
