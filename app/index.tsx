import { Redirect } from 'expo-router';
import { useEffect } from 'react';

import Auth from '@/components/Auth';
import useAuthStore from '@/store/authStore';
import { supabase } from '@/utils/supabase';
import { Main } from 'tamagui';

const Page = () => {
  const { session, setSession } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{session && session?.user ? <Redirect href="/(tabs)/home" /> : <Auth />}</>;
};

export default Page;
