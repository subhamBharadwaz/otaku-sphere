import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { View } from 'tamagui';

import Auth from '@/components/Auth';
import useAuthStore from '@/store/authStore';
import useFavoritesStore from '@/store/favoriteAnimeStore';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={24} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  const { session } = useAuthStore();
  const { loadInitialFavorites } = useFavoritesStore();

  useEffect(() => {
    if (session) {
      loadInitialFavorites();
    }
  }, []);

  if (!session) {
    return <Auth />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          borderColor: '#151515',
          height: 60,
          backgroundColor: '#151515',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-home' : 'ios-home-outline'} color="#94a3b8" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-grid' : 'ios-grid-outline'} color="#94a3b8" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => {
            return (
              <View alignItems="center" justifyContent="center" gap={10}>
                <TabBarIcon name={focused ? 'ios-search' : 'ios-search-outline'} color="#94a3b8" />
                {focused && <View w={20} h={3} bg="$gray7Light" borderRadius={15} />}
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-heart' : 'ios-heart-outline'} color="#94a3b8" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-settings' : 'ios-settings-outline'} color="#94a3b8" />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
