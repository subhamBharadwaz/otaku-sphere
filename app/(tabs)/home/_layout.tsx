import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { Button } from 'tamagui';

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
          headerRight: () => (
            <Button
              unstyled
              scaleIcon={0.95}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.975 }}
              animation="bouncy">
              <Ionicons name="ios-heart-outline" color="#db2777" size={24} />
            </Button>
          ),
        }}
      />
    </Stack>
  );
}
