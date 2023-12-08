import { Ionicons } from '@expo/vector-icons';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, H3, Paragraph, Main, Input, Spinner, Text } from 'tamagui';

import { useDebounce } from '@/hooks/useDebounce';
import AnimeCard from '@/components/AnimeCard';
import { getSearchedAnimes } from '@/services/api';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm, 1000);

  // const { data, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
  //   queryKey: ['anime-search', debouncedValue],
  //   queryFn: ({ pageParam = 1 }) => {
  //     if (debouncedValue && debouncedValue.length > 0) {
  //       return getSearchedAnimes(debouncedValue, pageParam as number);
  //     }
  //   },
  //   getNextPageParam: (lastPage) => {
  //     const { currentPage, totalPages, hasNextPage } = lastPage || {
  //       currentPage: 0,
  //       totalPages: 0,
  //       hasNextPage: false,
  //     };
  //     return hasNextPage && totalPages > 0 ? currentPage + 1 : undefined;
  //   },
  //   initialPageParam: 1,
  // });

  // const animes = data?.pages?.flatMap((page) => page?.animes);

  const searchedAnimeQuery = useQuery({
    queryKey: ['anime-search', debouncedValue],
    queryFn: async () => {
      if (debouncedValue && debouncedValue.length > 0) {
        const result = await getSearchedAnimes(debouncedValue, 1);
        return result;
      }

      // If debouncedValue is empty, return an empty array or an object with an empty array property
      return { animes: [] };
    },
  });

  // if (!animes || animes?.length === 0) {
  //   return null;
  // }

  return (
    <Main p="$4">
      <H3 color="$background">Find New Animes</H3>
      <Paragraph color="$background">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nesciunt?
      </Paragraph>

      <View flexDirection="row" alignItems="center" position="relative" w="80%">
        <Input
          size="$5"
          borderWidth={2}
          placeholder="Search anime names"
          bg="white"
          borderColor="$blue10"
          color="$background"
          my={20}
          w="100%"
          onChangeText={(text) => setSearchTerm(text)}
        />

        <Ionicons
          name="ios-search-outline"
          color="black"
          style={{ position: 'absolute', right: 15 }}
          size={24}
        />
      </View>
      {searchedAnimeQuery?.isLoading && <Spinner py={14} size="large" color="$blue10" />}

      {searchedAnimeQuery?.data?.animes && (
        <FlatList
          data={searchedAnimeQuery?.data?.animes}
          numColumns={2}
          contentContainerStyle={{
            gap: 20,
            paddingBottom: 200,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View mx="$3" flex={1} key={item?.id}>
              <AnimeCard anime={item} linkFrom="search" />
            </View>
          )}
        />
      )}

      {searchedAnimeQuery?.data?.animes?.length === 0 &&
        !searchedAnimeQuery?.isLoading &&
        debouncedValue.length > 0 && (
          <Text textAlign="center" color="$gray500" mt={20}>
            No matching animes found.
          </Text>
        )}
    </Main>
  );
};

export default Page;
