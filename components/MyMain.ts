import { Dimensions } from 'react-native';
import { styled, Main } from 'tamagui';

const { height } = Dimensions.get('window');

export const MyMain = styled(Main, {
  name: 'MyMain',
  backgroundColor: '$background',
  height,
});
