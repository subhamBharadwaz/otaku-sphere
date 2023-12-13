import { Link } from 'expo-router';
import React, { FC } from 'react';
import { Pressable, ViewToken } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Text } from 'tamagui';

interface GenreCardProps {
  genre: string;
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const GenreCard: FC<GenreCardProps> = React.memo(({ genre, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item === genre)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={rStyle}>
      <Link href={`/(tabs)/browse/genre/${genre}`} asChild>
        <Pressable
          style={{
            flex: 1,
            height: 80,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
            backgroundColor: 'rgba(71,85,105,.8)',
          }}>
          <Text fontSize="$6" color="white" fontWeight="bold">
            {genre}
          </Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
});
export default GenreCard;
