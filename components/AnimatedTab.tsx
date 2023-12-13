import { Platform, StyleSheet } from 'react-native';
import React, { Ref, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { View } from 'tamagui';

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={styles.tabBarIcon} {...props} />;
}

const AnimatedTab = ({ focused }: { focused: boolean }) => {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('teal');

  scale.value = withTiming(focused ? 1.2 : 1);
  backgroundColor.value = withTiming(focused ? 'green' : 'teal');

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        top: Platform.OS === 'ios' ? -10 : -15,
        width: Platform.OS === 'ios' ? 50 : 60,
        height: Platform.OS === 'ios' ? 50 : 60,
        borderRadius: Platform.OS === 'ios' ? 25 : 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
      }}>
      <TabBarIcon name={focused ? 'ios-search' : 'ios-search-outline'} color="white" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});

export default AnimatedTab;
