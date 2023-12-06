import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native';
import { Main, View } from 'tamagui';

import GenreCard from './_components/GenreCard';

import { getAnimes } from '@/services/api';

const Page = () => {
  const animeQuery = useQuery({
    queryKey: ['all-anime'],
    queryFn: getAnimes,
  });
  return (
    <Main p={15}>
      {/* Trending Animes */}

      {animeQuery.data && (
        <View>
          <FlatList
            numColumns={2}
            contentContainerStyle={{
              rowGap: 15,
              columnGap: 15,
            }}
            showsVerticalScrollIndicator={false}
            data={animeQuery?.data?.genres}
            renderItem={({ item }) => <GenreCard key={item} genre={item} />}
          />
        </View>
      )}
    </Main>
  );
};

export default Page;
