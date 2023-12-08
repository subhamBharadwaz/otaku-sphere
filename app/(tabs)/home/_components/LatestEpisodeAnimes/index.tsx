import { FC } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

// @ts-ignore
import LatestIcon from '@/assets/latest.svg';
import AnimeCard from '@/components/AnimeCard';
import { LatestEpisodeAnime } from '@/interfaces/anime';

interface LatestEpisodeAnimesProps {
  latestEpisodeAnimes: LatestEpisodeAnime[];
}

const LatestEpisodeAnimes: FC<LatestEpisodeAnimesProps> = ({ latestEpisodeAnimes }) => {
  return (
    <View>
      <View py={10} flexDirection="row" alignItems="center" gap="$2">
        <LatestIcon width={20} height={20} />
        <Text fontSize={20} fontWeight="bold">
          Latest Episode Animes
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={latestEpisodeAnimes}
        renderItem={({ item }) => <AnimeCard linkFrom="main" key={item.id} anime={item} />}
      />
    </View>
  );
};

export default LatestEpisodeAnimes;
