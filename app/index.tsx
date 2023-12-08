import { Redirect } from 'expo-router';
import { useEffect } from 'react';

import Auth from '@/components/Auth';
import useAuthStore from '@/store/authStore';
import useFavoritesStore from '@/store/favoriteAnimeStore';
import { supabase } from '@/utils/supabase';

const Page = () => {
  const { session, setSession } = useAuthStore();
  const { loadInitialFavorites } = useFavoritesStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    loadInitialFavorites();
  }, []);

  return <>{session && session?.user ? <Redirect href="/(tabs)/home" /> : <Auth />}</>;
};

export default Page;
