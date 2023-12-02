import { FC } from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'tamagui';

// @ts-ignore
import UpcomingIcon from '@/assets/upcoming.svg';
import AnimeCard from '@/components/AnimeCard';
import { TopUpcomingAnime } from '@/interfaces/anime';

interface TopUpcomingProps {
  topUpcomingAnimes: TopUpcomingAnime[];
}

const TopUpcoming: FC<TopUpcomingProps> = ({ topUpcomingAnimes }) => {
  return (
    <View>
      <View py={10} flexDirection="row" alignItems="center" gap="$2">
        <UpcomingIcon width={20} height={20} />
        <Text fontSize={20} fontWeight="bold">
          Top Upcoming Animes
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        data={topUpcomingAnimes}
        renderItem={({ item }) => <AnimeCard key={item.id} anime={item} />}
      />
    </View>
  );
};

export default TopUpcoming;
