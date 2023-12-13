import { Stack } from 'expo-router';
import { Button } from 'tamagui';

import useAuthStore from '@/store/authStore';
import { supabase } from '@/utils/supabase';

export default function TabLayout() {
  const { setSession } = useAuthStore();
  const handleSignOut = () => {
    supabase.auth.signOut();
    setSession(null);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#f1f5f9',
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Settings',
          headerTintColor: '#dc2626',
          headerTitleStyle: {
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: '#151515',
          },
          headerRight: () => (
            <Button color="$orange10" fontSize="$4" fontWeight="bold" onPress={handleSignOut}>
              Sign out
            </Button>
          ),
        }}
      />
    </Stack>
  );
}
