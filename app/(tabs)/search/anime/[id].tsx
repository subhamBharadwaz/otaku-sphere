import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { Spinner, View } from 'tamagui';

import AnimeDetailsPage from '@/components/AnimeDetailsPage';
import { MyStack } from '@/components/MyStack';
import { getAnimeInfo } from '@/services/api';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const animeDetailsQuery = useQuery({
    queryKey: ['anime-details', id],
    queryFn: () => getAnimeInfo(id),
  });

  return (
    <MyStack theme="dark">
      {animeDetailsQuery?.isLoading && (
        <View justifyContent="center" alignItems="center" height="100%">
          <Spinner py={14} size="large" color="$blue10" />
        </View>
      )}

      <>{animeDetailsQuery?.data && <AnimeDetailsPage id={id} anime={animeDetailsQuery?.data} />}</>
    </MyStack>
  );
};

export default Page;
