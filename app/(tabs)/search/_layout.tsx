import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Search Anime',
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
