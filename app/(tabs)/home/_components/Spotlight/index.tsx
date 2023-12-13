import { FC } from 'react';
import { FlatList } from 'react-native';
import { H3, View } from 'tamagui';

// @ts-ignore
import SpotlightIcon from '@/assets/spotlight.svg';
import AnimeCard from '@/components/AnimeCard';
import { SpotlightAnime } from '@/interfaces/anime';

interface SpotlightProps {
  spotlightAnimes: SpotlightAnime[];
}

const Spotlight: FC<SpotlightProps> = ({ spotlightAnimes }) => {
  return (
    <View>
      <View py={10} flexDirection="row" alignItems="center" gap="$2">
        <SpotlightIcon width={20} height={20} />
        <H3 fontSize={20}>Spotlight Animes</H3>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={spotlightAnimes}
        renderItem={({ item }) => <AnimeCard linkFrom="main" key={item.id} anime={item} />}
      />
    </View>
  );
};

export default Spotlight;
