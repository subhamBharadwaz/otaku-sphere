import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { View, YStack, XStack, Text, Separator } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

import { Stats } from '@/interfaces/details';

interface AnimeInfoCardProps {
  malscore: string;
  genres: string[];
  name: string;
  stats: Stats;
}

const AnimeInfoCard: FC<AnimeInfoCardProps> = ({ malscore, genres, stats, name }) => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <LinearGradient
        colors={['#f1f5f9', '#fafafa']}
        start={[0, 1]}
        end={[0, 0]}
        borderRadius={15}
        w={300}
        h="$18">
        <YStack alignItems="center" space="$6" justifyContent="center" p="$5">
          <YStack space="$2">
            <XStack alignItems="center" spaceDirection="horizontal" space="$5" flexWrap="wrap">
              <Text fontSize={20} fontWeight="bold">
                {name}
              </Text>
              <XStack alignItems="center" space="$2">
                <Ionicons name="ios-star" size={18} />
                <Text>{malscore === '?' ? 'In progress' : malscore}</Text>
              </XStack>
            </XStack>
            <XStack flexWrap="wrap" space="$3">
              {genres?.map((genre) => (
                <Text color="$gray7" key={genre}>
                  {genre}
                </Text>
              ))}
            </XStack>
          </YStack>
          <View w="$18" borderRadius={15} bg="white" px="$5" py="$3">
            <XStack justifyContent="space-between" w="100%">
              <YStack>
                <Text fontWeight="bold" fontSize={16}>
                  {stats?.episodes?.sub}
                </Text>
                <Text>Episodes</Text>
              </YStack>
              <Separator alignSelf="stretch" vertical borderColor="$gray8Light" />
              <YStack>
                <Text fontWeight="bold" fontSize={16}>
                  {parseInt(stats?.duration, 10)} Min
                </Text>
                <Text>Per Ep.</Text>
              </YStack>
            </XStack>
          </View>
        </YStack>
      </LinearGradient>
    </View>
  );
};

export default AnimeInfoCard;
