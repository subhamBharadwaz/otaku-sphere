import { useQuery } from '@tanstack/react-query';
import { Main, ScrollView, YStack } from 'tamagui';

import LatestEpisodeAnimes from './_components/LatestEpisodeAnimes';
import Spotlight from './_components/Spotlight';
import TopAiringAnimes from './_components/TopAiringAnimes';
import TopUpcoming from './_components/TopUpcoming';
import Trending from './_components/Trending';

import { getAnimes } from '@/services/api';

const Page = () => {
  const animeQuery = useQuery({
    queryKey: ['all-anime'],
    queryFn: getAnimes,
  });
  return (
    <Main p={15}>
      {/* Trending Animes */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack gap="$5">
          <>{animeQuery.data && <Trending trending={animeQuery?.data?.trendingAnimes} />}</>
          <>
            {animeQuery.data && <Spotlight spotlightAnimes={animeQuery?.data?.spotlightAnimes} />}
          </>
          <>
            {animeQuery.data && (
              <TopUpcoming topUpcomingAnimes={animeQuery?.data?.topUpcomingAnimes} />
            )}
          </>
          <>
            {animeQuery.data && (
              <LatestEpisodeAnimes latestEpisodeAnimes={animeQuery?.data?.latestEpisodeAnimes} />
            )}
          </>
          <>
            {animeQuery.data && (
              <TopAiringAnimes topAiringAnimes={animeQuery?.data?.topAiringAnimes} />
            )}
          </>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default Page;
