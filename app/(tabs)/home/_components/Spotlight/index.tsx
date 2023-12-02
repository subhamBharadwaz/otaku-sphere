import { FC } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

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
        <Text fontSize={20} fontWeight="bold">
          Spotlight Animes
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={spotlightAnimes}
        renderItem={({ item }) => <AnimeCard key={item.id} anime={item} />}
      />
    </View>
  );
};

export default Spotlight;
