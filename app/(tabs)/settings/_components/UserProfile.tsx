import { Ionicons } from '@expo/vector-icons';
import { Sheet, SheetProps, useSheet } from '@tamagui/sheet';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  ListItem,
  YGroup,
  Separator,
  YStack,
  Button,
  H2,
  Paragraph,
  ScrollView,
  Avatar,
  H5,
  Text,
  H6,
  Input,
  Label,
} from 'tamagui';

interface UserProfileProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const UserProfile: FC<UserProfileProps> = ({ open, setOpen }) => {
  const [modal, setModal] = useState(true);
  const [position, setPosition] = useState(0);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={['90%', 256, 190]}
        snapPointsMode="mixed"
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
        zIndex={100_000}
        animation="quick">
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" space="$5">
          <Avatar alignSelf="center" circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <YStack space="$4">
            <H6 color="$gray8Light">PUBLIC INFORMATION</H6>
            <YStack space="$2.5">
              <Label htmlFor="fname">First Name</Label>
              <Input id="fname" defaultValue="Nate" />
            </YStack>
            <YStack space="$2.5">
              <Label htmlFor="lname">Last Name</Label>
              <Input id="lname" defaultValue="Wienert" />
            </YStack>
            <YStack space="$2.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" keyboardType="email-address" defaultValue="nate@gmail.com" />
            </YStack>
          </YStack>

          <Button size="$4" bg="$green8Dark" onPress={() => setOpen(false)}>
            Done
          </Button>
        </Sheet.Frame>
      </Sheet>
    </ScrollView>
  );
};

export default UserProfile;
