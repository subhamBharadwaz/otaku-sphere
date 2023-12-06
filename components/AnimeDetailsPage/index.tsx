import { FC } from 'react';
import { ScrollView, View, YStack, H3, Paragraph } from 'tamagui';

import AnimeInfoCard from './AnimeInfoCard';
import AnimePoster from './AnimePoster';
import RecommendedAnimes from './RecommendedAnimes';
import RelatedAnimes from './RelatedAnimes';

import { AnimeDetails } from '@/interfaces/details';

interface AnimeDetailsProps {
  id: string;
  anime: AnimeDetails;
}

const AnimeDetailsPage: FC<AnimeDetailsProps> = ({ id, anime }) => {
  const { name, poster, description, stats } = anime?.anime?.info;
  const { genres, malscore } = anime?.anime?.moreInfo;
  return (
    <ScrollView px="$5" my="$5" showsVerticalScrollIndicator={false}>
      <YStack space="$5">
        <AnimePoster poster={poster} name={name} />
        <AnimeInfoCard genres={genres} malscore={malscore} name={name} stats={stats} />
        <View gap="$2">
          <H3 color="$background">Description</H3>
          <Paragraph color="$background">{description}</Paragraph>
        </View>

        <RelatedAnimes relatedAnimes={anime?.relatedAnimes} />
        <RecommendedAnimes recommendedAnimes={anime?.recommendedAnimes} />
      </YStack>
    </ScrollView>
  );
};

export default AnimeDetailsPage;
