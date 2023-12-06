import { FC } from 'react';
import { FlatList } from 'react-native';
import { H3, View } from 'tamagui';

import AnimeCard from '../AnimeCard';

import { RelatedAnime } from '@/interfaces/details';

interface RelatedAnimesProps {
  relatedAnimes: RelatedAnime[];
}

const RelatedAnimes: FC<RelatedAnimesProps> = ({ relatedAnimes }) => {
  return (
    <View gap="$2">
      <H3 color="$background">You may also like</H3>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={relatedAnimes}
        renderItem={({ item }) => <AnimeCard key={item?.id} anime={item} />}
      />
    </View>
  );
};

export default RelatedAnimes;
