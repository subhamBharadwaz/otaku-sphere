import { FC } from 'react';
import { View, Image } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

interface AnimePosterProps {
  poster: string;
  name: string;
}

const AnimePoster: FC<AnimePosterProps> = ({ poster, name }) => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <LinearGradient
        aspectRatio={6 / 9}
        overflow="hidden"
        width="80%"
        colors={['#0ea5e9', '#67e8f9']}
        start={[0, 1]}
        end={[0, 0]}
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
      </LinearGradient>
    </View>
  );
};

export default AnimePoster;
