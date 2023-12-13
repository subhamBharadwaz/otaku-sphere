import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, Paragraph, Input, Spinner, Text } from 'tamagui';

import AnimeCard from '@/components/AnimeCard';
import { MyMain } from '@/components/MyMain';
import { useDebounce } from '@/hooks/useDebounce';
import { getSearchedAnimes } from '@/services/api';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedValue = useDebounce(searchTerm, 1000);

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

  return (
    <MyMain px="$4" py="$2">
      <Paragraph fontSize={16} color="$gray11Dark">
        Search and discover anime treasures in our diverse collection
      </Paragraph>

      <View flexDirection="row" alignItems="center" position="relative" w="80%">
        <Input
          size="$5"
          borderWidth={2}
          placeholder="Search anime by name"
          bg="$gray3Dark"
          placeholderTextColor="$gray10Light"
          color="white"
          my={20}
          w="100%"
          onChangeText={(text) => setSearchTerm(text)}
        />

        <Ionicons
          name="ios-search-outline"
          color="white"
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
    </MyMain>
  );
};

export default Page;
