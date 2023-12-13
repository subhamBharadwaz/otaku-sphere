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
          headerTitle: 'Search Anime',
          headerTintColor: '#dc2626',
          headerTitleStyle: {
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: '#151515',
          },
        }}
      />
      <Stack.Screen
        name="anime/[id]"
        options={{
          headerTitle: '',
        }}
      />
    </Stack>
  );
}
