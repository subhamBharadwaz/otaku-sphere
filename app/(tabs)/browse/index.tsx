import { useQuery } from '@tanstack/react-query';
import { FlatList, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { View } from 'tamagui';

import GenreCard from './_components/GenreCard';

import { MyStack } from '@/components/MyStack';
import { getAnimes } from '@/services/api';

const Page = () => {
  const animeQuery = useQuery({
    queryKey: ['all-anime'],
    queryFn: getAnimes,
  });

  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <MyStack theme="dark" p={15}>
      {animeQuery.data && (
        <View>
          <FlatList
            contentContainerStyle={{
              paddingVertical: 10,
            }}
            onViewableItemsChanged={({ viewableItems: vItems }) => {
              viewableItems.value = vItems;
            }}
            showsVerticalScrollIndicator={false}
            data={animeQuery?.data?.genres}
            renderItem={({ item }) => (
              <GenreCard viewableItems={viewableItems} key={item} genre={item} />
            )}
          />
        </View>
      )}
    </MyStack>
  );
};

export default Page;
