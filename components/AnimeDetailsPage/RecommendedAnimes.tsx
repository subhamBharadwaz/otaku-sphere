import { FC } from 'react';
import { FlatList } from 'react-native';
import { H3, View } from 'tamagui';

import AnimeCard from '../AnimeCard';

import { RecommendedAnime } from '@/interfaces/details';

interface RecommendedAnimesProps {
  recommendedAnimes: RecommendedAnime[];
}

const RecommendedAnimes: FC<RecommendedAnimesProps> = ({ recommendedAnimes }) => {
  return (
    <View gap="$2">
      <H3>Recommended animes</H3>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={recommendedAnimes}
        renderItem={({ item }) => <AnimeCard key={item?.id} anime={item} />}
      />
    </View>
  );
};

export default RecommendedAnimes;
