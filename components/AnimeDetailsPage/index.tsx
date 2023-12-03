import { FC } from 'react';
import { ScrollView, Text, Image, View, YStack, XStack, ListItem, Separator } from 'tamagui';

import { AnimeDetails } from '@/interfaces/details';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'tamagui/linear-gradient';

interface AnimeDetailsProps {
  id: string;
  anime: AnimeDetails;
}

const AnimeDetailsPage: FC<AnimeDetailsProps> = ({ id, anime }) => {
  const { name, poster, description, stats } = anime?.anime?.info;
  const { aired, status, studios, producers, genres, malscore } = anime?.anime?.moreInfo;
  return (
    <ScrollView my="$5" showsVerticalScrollIndicator={false}>
      <YStack space="$5">
        <View flex={1} alignItems="center" justifyContent="center">
          <View
            aspectRatio={6 / 9}
            overflow="hidden"
            width="80%"
            bg="$blue4Light"
            borderRadius={15}>
            <Image
              source={{ uri: poster }}
              style={{ width: undefined, height: undefined }}
              flex={1}
              scale={0.96}
              borderRadius={7}
              alt={name}
              resizeMode="contain"
            />
          </View>
        </View>
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
      </YStack>
    </ScrollView>
  );
};

export default AnimeDetailsPage;
