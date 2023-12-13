import { FlatList } from 'react-native';
import { Main, Text, View } from 'tamagui';

import AnimeCard from '@/components/AnimeCard';
import { FavoriteAnime } from '@/interfaces/favorite';
import useFavoritesStore from '@/store/favoriteAnimeStore';
import { MyStack } from '@/components/MyStack';

const Page = () => {
  const { favorites } = useFavoritesStore();

  return (
    <MyStack theme="dark" p="$5">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          gap: 20,
        }}
        data={favorites}
        renderItem={({ item }) => (
          <View key={item.anime_id} mx="$3" flex={1}>
            <AnimeCard linkFrom="favorite" anime={item as FavoriteAnime} />
          </View>
        )}
      />
    </MyStack>
  );
};

export default Page;
