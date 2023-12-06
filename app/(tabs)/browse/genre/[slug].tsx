import { useInfiniteQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { FlatList } from 'react-native';
import { Main, Spinner, Text, View } from 'tamagui';

import AnimeCard from '@/components/AnimeCard';
import { getAnimesByGenre } from '@/services/api';

const Page = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const { data, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['anime-genre', slug],
    queryFn: ({ pageParam = 1 }) => getAnimesByGenre(slug, pageParam as number),
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages, hasNextPage } = lastPage || {
        currentPage: 0,
        totalPages: 0,
        hasNextPage: false,
      };
      return hasNextPage && totalPages > 0 ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const animes = data?.pages?.flatMap((page) => page?.animes);

  return (
    <Main p="$5">
      {isLoading && <Spinner py={14} size="large" color="$blue10" />}

      <>
        {animes && animes?.length > 0 ? (
          <FlatList
            data={animes}
            numColumns={2}
            contentContainerStyle={{
              gap: 20,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View mx="$3" flex={1} key={item?.id}>
                <AnimeCard linkFrom="genre" anime={item} />
              </View>
            )}
            onEndReached={() => fetchNextPage()}
            onEndReachedThreshold={0.1}
          />
        ) : (
          <Text>No data</Text>
        )}
      </>
      {isFetchingNextPage && <Spinner pb={15} pt={10} size="large" color="$blue10" />}
    </Main>
  );
};

export default Page;
