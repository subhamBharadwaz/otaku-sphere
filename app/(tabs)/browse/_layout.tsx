import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#f1f5f9',
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Brows Animes',
          headerTintColor: '#dc2626',
          headerStyle: {
            backgroundColor: '#151515',
          },
        }}
      />
      <Stack.Screen
        name="genre/[slug]"
        options={{
          headerTitle: 'Genre',
          headerTintColor: '#dc2626',
          headerStyle: {
            backgroundColor: '#151515',
          },
        }}
      />
      <Stack.Screen
        name="anime/[id]"
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
