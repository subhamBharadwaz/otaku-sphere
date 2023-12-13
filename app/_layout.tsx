import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';

import { MySafeAreaView } from '@/components/MySafeAreaView';
import { queryClient } from '@/queryClient';
import config from '@/tamagui.config';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <TamaguiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Theme name="dark">
            <MySafeAreaView>
              <Slot />
            </MySafeAreaView>
          </Theme>
        </QueryClientProvider>
      </TamaguiProvider>
    </>
  );
}
