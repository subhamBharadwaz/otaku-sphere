import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button, Input, View, AlertDialog, XStack, Label, YStack, Main, H3 } from 'tamagui';

import { supabase } from '@/utils/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <Main mt={40} p={12}>
      <H3 alignSelf="center" color="$background" my="$5">
        Sign up
      </H3>
      <YStack space="$7">
        <XStack>
          <Label width={90} htmlFor="email" color="$background">
            Email
          </Label>
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            id="email"
            bg="white"
            color="$background"
            borderColor="$blue11"
            flex={1}
          />
        </XStack>

        <XStack>
          <Label width={90} htmlFor="password" color="$background">
            Password
          </Label>
          <Input
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="********"
            id="password"
            bg="white"
            color="$background"
            borderColor="$blue11"
            flex={1}
          />
        </XStack>

        <YStack space="$3">
          <Button disabled={loading} onPress={() => signInWithEmail()}>
            Login
          </Button>

          <Button disabled={loading} onPress={() => signUpWithEmail()}>
            Sign up
          </Button>
        </YStack>
      </YStack>
    </Main>
  );
}
