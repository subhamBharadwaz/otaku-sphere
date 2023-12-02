import { FC } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

// @ts-ignore
import FireIcon from '@/assets/fire.svg';
import AnimeCard from '@/components/AnimeCard';
import { TrendingAnime } from '@/interfaces/anime';

interface TrendingProps {
  trending: TrendingAnime[];
}

const Trending: FC<TrendingProps> = ({ trending }) => {
  return (
    <View>
      <View py={10} flexDirection="row" alignItems="center" gap="$2">
        <FireIcon width={20} height={20} />
        <Text fontSize={20} fontWeight="bold">
          Trending
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={trending}
        renderItem={({ item }) => <AnimeCard key={item.id} anime={item} />}
      />
    </View>
  );
};

export default Trending;
