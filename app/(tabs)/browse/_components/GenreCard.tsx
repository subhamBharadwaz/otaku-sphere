import { Link } from 'expo-router';
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { Text, View } from 'tamagui';

interface GenreCardProps {
  genre: string;
}

const GenreCard: FC<GenreCardProps> = ({ genre }) => {
  return (
    <Link href={`/(tabs)/browse/genre/${genre}`} asChild>
      <Pressable
        style={{
          flex: 1,
          width: 50,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginHorizontal: 12,
          backgroundColor: '#2563eb',
        }}>
        <Text fontSize="$6" color="white" fontWeight="bold">
          {genre}
        </Text>
      </Pressable>
    </Link>
  );
};

export default GenreCard;
