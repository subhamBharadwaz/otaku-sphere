import { FC } from 'react';
import { FlatList } from 'react-native';
import { H3, View } from 'tamagui';

// @ts-ignore
import AiringIcon from '@/assets/airing.svg';
import AnimeCard from '@/components/AnimeCard';
import { TopAiringAnime } from '@/interfaces/anime';

interface TopAiringAnimesProps {
  topAiringAnimes: TopAiringAnime[];
}

const TopAiringAnimes: FC<TopAiringAnimesProps> = ({ topAiringAnimes }) => {
  return (
    <View>
      <View py={10} flexDirection="row" alignItems="center" gap="$2">
        <AiringIcon width={20} height={20} />
        <H3 fontSize={20}>Top Airing Animes</H3>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={topAiringAnimes}
        renderItem={({ item, index }) => (
          <AnimeCard linkFrom="main" key={`${item.id}-${index}`} anime={item} />
        )}
      />
    </View>
  );
};

export default TopAiringAnimes;
