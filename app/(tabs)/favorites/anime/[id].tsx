import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { Main, Spinner } from 'tamagui';

import AnimeDetailsPage from '@/components/AnimeDetailsPage';
import { getAnimeInfo } from '@/services/api';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const animeDetailsQuery = useQuery({
    queryKey: ['anime-details', id],
    queryFn: () => getAnimeInfo(id),
  });

  console.log({ id });

  return (
    <Main>
      {animeDetailsQuery?.isLoading && <Spinner py={14} size="large" color="$blue10" />}

      <>{animeDetailsQuery?.data && <AnimeDetailsPage id={id} anime={animeDetailsQuery?.data} />}</>
    </Main>
  );
};

export default Page;
