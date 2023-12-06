import { Link } from 'expo-router';
import { FC } from 'react';
import { Card, Image, Text } from 'tamagui';

import {
  LatestEpisodeAnime,
  SpotlightAnime,
  Today,
  TopAiringAnime,
  TopUpcomingAnime,
  TrendingAnime,
} from '@/interfaces/anime';
import { RelatedAnime } from '@/interfaces/details';
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
    | Anime;
  linkFrom: 'main' | 'genre' | 'search';
}

const AnimeCard: FC<AnimeCardProps> = ({ anime, linkFrom }) => {
  return (
    <Link
      href={
        linkFrom === 'main'
          ? `/(tabs)/home/anime/${anime?.id}`
          : linkFrom === 'genre'
            ? `/(tabs)/browse/anime/${anime?.id}`
            : `/(tabs)/search/anime/${anime?.id}`
      }
      asChild>
      <Card width={150} height={250} backgroundColor="$colorTransparent">
        <Card.Header p={0}>
          <Image
            source={{ uri: anime?.poster }}
            alt={anime?.name}
            style={{ width: 150, height: 200 }}
            borderRadius={5}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <Text fontSize={16}>{anime?.name}</Text>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default AnimeCard;
