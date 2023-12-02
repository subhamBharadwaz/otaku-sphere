import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-home' : 'ios-home-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-grid' : 'ios-grid-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-search' : 'ios-search-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-heart' : 'ios-heart-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'ios-person' : 'ios-person-outline'} color={color} />
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
