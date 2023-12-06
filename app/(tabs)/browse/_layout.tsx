import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Brows Animes',
        }}
      />
      <Stack.Screen
        name="genre/[slug]"
        options={{
          headerTitle: 'Genre',
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
