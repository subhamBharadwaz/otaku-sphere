import { Ionicons } from '@expo/vector-icons';
import { Sheet } from '@tamagui/sheet';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { ListItem, YGroup, Separator, YStack, Button, H2, Paragraph, ScrollView } from 'tamagui';

interface ManageNotificationsProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ManageNotifications: FC<ManageNotificationsProps> = ({ open, setOpen }) => {
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
        <Sheet.Frame padding="$4" justifyContent="center" alignItems="center" space="$5">
          <Button
            size="$6"
            circular
            icon={<Ionicons name="ios-chevron-down-outline" size={24} />}
            onPress={() => setOpen(false)}
          />
          <H2>Noti</H2>
        </Sheet.Frame>
      </Sheet>
    </ScrollView>
  );
};

export default ManageNotifications;
