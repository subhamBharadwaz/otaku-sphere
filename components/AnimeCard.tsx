import { Link } from 'expo-router';
import { FC } from 'react';
import { Card, H5, Image, SizableText, Text, YStack } from 'tamagui';

import {
  LatestEpisodeAnime,
  SpotlightAnime,
  Today,
  TopAiringAnime,
  TopUpcomingAnime,
  TrendingAnime,
} from '@/interfaces/anime';
import { RelatedAnime, Stats } from '@/interfaces/details';
import { FavoriteAnime } from '@/interfaces/favorite';
import { Anime } from '@/interfaces/search';

interface AnimeCardProps {
  anime:
    | TopAiringAnime
    | Today
    | TopUpcomingAnime
    | LatestEpisodeAnime
    | TrendingAnime
    | SpotlightAnime
    | RelatedAnime
    | Anime
    | FavoriteAnime;
  linkFrom: 'main' | 'genre' | 'search' | 'favorite';
}

const AnimeCard: FC<AnimeCardProps> = ({ anime, linkFrom }) => {
  return (
    <Link
      href={
        linkFrom === 'main'
          ? `/(tabs)/home/anime/${anime?.id}`
          : linkFrom === 'genre'
            ? `/(tabs)/browse/anime/${anime?.id}`
            : linkFrom === 'search'
              ? `/(tabs)/search/anime/${anime?.id}`
              : linkFrom === 'favorite' && 'anime_id' in anime
                ? `/(tabs)/favorites/anime/${anime?.anime_id}`
                : `/(tabs)/home/anime/${anime?.id}`
      }
      asChild>
      <YStack space="$2" width={150}>
        <Image
          source={{ uri: anime?.poster }}
          alt={anime?.name}
          style={{ width: 150, height: 200 }}
          borderRadius={5}
        />
        <H5 fontSize={16}>
          {anime?.name.length > 15 ? `${anime?.name.slice(0, 15)}...` : anime?.name}
        </H5>
      </YStack>
    </Link>
  );
};

export default AnimeCard;
