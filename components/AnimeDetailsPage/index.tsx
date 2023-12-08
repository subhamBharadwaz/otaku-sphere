import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { FC } from 'react';
import { ScrollView, View, YStack, H3, Paragraph, Button, useTheme, Text } from 'tamagui';

import AnimeInfoCard from './AnimeInfoCard';
import AnimePoster from './AnimePoster';
import RecommendedAnimes from './RecommendedAnimes';
import RelatedAnimes from './RelatedAnimes';

import { AnimeDetails } from '@/interfaces/details';
import useAuthStore from '@/store/authStore';
import useFavoritesStore from '@/store/favoriteAnimeStore';
import { supabase } from '@/utils/supabase';

interface AnimeDetailsProps {
  id: string;
  anime: AnimeDetails;
}

const AnimeDetailsPage: FC<AnimeDetailsProps> = ({ id, anime }) => {
  const { name, poster, description, stats } = anime?.anime?.info;
  const { genres, malscore } = anime?.anime?.moreInfo;
  const theme = useTheme();

  const link = `https://api-aniwatch.onrender.com/anime/info?${id}`;

  const { session } = useAuthStore();
  const { favorites, toggleFavorite } = useFavoritesStore();

  const isFavorite = favorites.some((favorite) => favorite.anime_id === id);

  const onToggleFavorite = async () => {
    toggleFavorite(id, poster, link, name, session?.user?.id || '');

    const { data: existingFavorites, error } = await supabase
      .from('favorite_animes')
      .select('id')
      .eq('anime_id', id)
      .eq('user_id', session?.user?.id);

    if (error) {
      console.error('Error checking favorites:', error.message);
      return;
    }

    if (existingFavorites.length > 0) {
      // Anime is already favorited, delete it
      const { error: deleteError } = await supabase
        .from('favorite_animes')
        .delete()
        .eq('anime_id', id)
        .eq('user_id', session?.user?.id);

      if (deleteError) {
        console.error('Error deleting favorite:', deleteError.message);
      }
    } else {
      // Anime is not favorited, insert it
      const { error: insertError } = await supabase
        .from('favorite_animes')
        .insert({ anime_id: id, user_id: session?.user?.id, poster, link, name })
        .select('id')
        .single();

      if (insertError) {
        console.error('Error inserting favorite:', insertError.message);
      }
    }
  };

  return (
    <ScrollView px="$5" my="$5" showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button unstyled onPress={onToggleFavorite}>
              <Ionicons
                size={24}
                color={theme.pink11.get()}
                name={isFavorite ? 'ios-heart' : 'ios-heart-outline'}
              />
            </Button>
          ),
        }}
      />
      <YStack space="$5">
        <AnimePoster poster={poster} name={name} />
        <AnimeInfoCard genres={genres} malscore={malscore} name={name} stats={stats} />
        <View gap="$2">
          <H3 color="$background">Description</H3>
          <Paragraph color="$background">{description}</Paragraph>
        </View>
        <RelatedAnimes relatedAnimes={anime?.relatedAnimes} />
        <RecommendedAnimes recommendedAnimes={anime?.recommendedAnimes} />
      </YStack>
    </ScrollView>
  );
};

export default AnimeDetailsPage;
