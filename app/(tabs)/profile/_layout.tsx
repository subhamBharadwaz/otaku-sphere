import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Profile',
        }}
      />
    </Stack>
  );
}
