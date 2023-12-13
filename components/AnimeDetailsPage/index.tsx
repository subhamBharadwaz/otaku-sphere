import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';

import { FC } from 'react';
import { ScrollView, View, YStack, H3, Paragraph, Button, Image, Text, XStack } from 'tamagui';

import AnimeInfoCard from './AnimeInfoCard';

import RecommendedAnimes from './RecommendedAnimes';
import RelatedAnimes from './RelatedAnimes';

import { AnimeDetails } from '@/interfaces/details';
import useAuthStore from '@/store/authStore';
import useFavoritesStore from '@/store/favoriteAnimeStore';
import { supabase } from '@/utils/supabase';
import { Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'tamagui/linear-gradient';

interface AnimeDetailsProps {
  id: string;
  anime: AnimeDetails;
}

const AnimeDetailsPage: FC<AnimeDetailsProps> = ({ id, anime }) => {
  const { name, poster, description, stats } = anime?.anime?.info;
  const { genres, malscore } = anime?.anime?.moreInfo;

  const navigation = useNavigation();

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
  const { width, height } = Dimensions.get('window');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerLeft: ({ tintColor }) => (
            <Button
              unstyled
              bg="rgba(51,65,85,.8)"
              borderRadius="$12"
              p="$3"
              onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={24} color={tintColor} />
            </Button>
          ),
          headerRight: () => (
            <Button
              unstyled
              bg="rgba(51,65,85,.8)"
              borderRadius="$12"
              p="$3"
              onPress={onToggleFavorite}
              animation="bouncy"
              pressStyle={{
                scale: 0.9,
              }}
              style={{ scale: 1 }}>
              <Ionicons
                size={24}
                color="#ef4444"
                name={isFavorite ? 'ios-heart' : 'ios-heart-outline'}
              />
            </Button>
          ),
        }}
      />

      <ImageBackground
        source={{ uri: poster }}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          height: height - 400,
          position: 'relative',
          padding: 20,
        }}>
        <LinearGradient
          colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,.6)']}
          start={[0, 0.6]}
          end={[0, 0.8]}
          pos="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <YStack space="$2">
          <H3 fontSize={34} fontWeight="bold">
            {name}
          </H3>
          <XStack space="$2">
            <Text fontWeight="bold" fontSize={16} color="white">
              {malscore === '?' ? 'In progress' : malscore}
            </Text>
            <Ionicons name="ios-star" color="#d97706" size={18} />
          </XStack>
        </YStack>
      </ImageBackground>

      <YStack space="$5" px={20} mt="$5">
        {/* <AnimeInfoCard genres={genres} malscore={malscore} name={name} stats={stats} /> */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            gap: 20,
          }}>
          {genres?.map((genre) => (
            <View px="$3" py="$2" bg="rgba(148,163,184,.4)" borderRadius={10} key={genre}>
              <Text fontSize={16} color="white">
                {' '}
                {genre}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View gap="$2">
          <H3>Description</H3>
          <Paragraph color="$gray7Light" fontSize={16} lineHeight="$5">
            {description.length > 300 ? `${description.slice(0, 300)}...` : description}
          </Paragraph>
        </View>
        <RelatedAnimes relatedAnimes={anime?.relatedAnimes} />
        <RecommendedAnimes recommendedAnimes={anime?.recommendedAnimes} />
      </YStack>
    </ScrollView>
  );
};

export default AnimeDetailsPage;
