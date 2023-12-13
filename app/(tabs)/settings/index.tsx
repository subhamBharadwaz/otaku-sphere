import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { AlertDialog, Button, ListItem, ScrollView, XStack, YStack } from 'tamagui';

import ManageFavorite from './_components/ManageFavorite';
import ManageNotifications from './_components/ManageNotifications';
import UserProfile from './_components/UserProfile';

import { MyStack } from '@/components/MyStack';
import AppInfo from './_components/AppInfo';

const Page = () => {
  const [openProfileSheet, setOpenProfileSheet] = useState<boolean>(false);
  const [openNotificationSheet, setOpenNotificationSheet] = useState<boolean>(false);
  const [openFavoriteSheet, setOpenFavoriteSheet] = useState<boolean>(false);
  const [openAppInfoSheet, setOpenAppInfoSheet] = useState<boolean>(false);

  interface ListItemData {
    id: string;
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subTitle: string;
    onPress: () => void;
    showAlert?: boolean;
  }

  const list: ListItemData[] = [
    {
      id: 'profile',
      icon: 'ios-person-outline',
      title: 'Profile',
      subTitle: 'Update you profile',
      onPress: () => setOpenProfileSheet(true),
    },
    {
      id: 'notification',
      icon: 'ios-notifications-outline',
      title: 'Notification Preferences',
      subTitle: 'Notifications for new releases or updates',
      onPress: () => setOpenNotificationSheet(true),
    },
    {
      id: 'favorite',
      icon: 'ios-heart-outline',
      title: 'Favorite Management',
      subTitle: 'Clear all favorites or manage saved anime',
      onPress: () => setOpenFavoriteSheet(true),
    },
    {
      id: 'app-info',
      icon: 'ios-information-outline',
      title: 'App Information',
      subTitle: 'About OtakuSphere',
      onPress: () => setOpenAppInfoSheet(true),
    },
    {
      id: 'review',
      icon: 'ios-chatbox-ellipses-outline',
      title: 'Review & Feedback',
      subTitle: 'Provide feedback or rate the app',
      onPress: () => {},
    },
    {
      id: 'legal',
      icon: 'ios-document-outline',
      title: 'Legal & Terms',
      subTitle: 'Access terms of service and privacy policy',
      onPress: () => {},
    },
    {
      id: 'delete',
      icon: 'ios-trash-bin-outline',
      title: 'Delete Account',
      subTitle: 'Option to permanently delete the user account',
      onPress: () => {},
      showAlert: true,
    },
  ];

  return (
    <MyStack p="$4">
      <ScrollView space="$4">
        {list?.map((item) => {
          if (item?.showAlert) {
            return (
              <AlertDialog key={item?.id}>
                <AlertDialog.Trigger asChild>
                  <ListItem
                    onPress={item.showAlert ? undefined : item.onPress}
                    borderWidth={1}
                    borderRadius={5}
                    hoverTheme
                    pressTheme
                    icon={<Ionicons name={item.icon} size={24} />}
                    iconAfter={<Ionicons name="ios-chevron-forward-outline" size={24} />}
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay
                    key="overlay"
                    animation="quick"
                    opacity={0.5}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                  />
                  <AlertDialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                      'quick',
                      {
                        opacity: {
                          overshootClamping: true,
                        },
                      },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    x={0}
                    scale={1}
                    opacity={1}
                    y={0}>
                    <YStack space>
                      <AlertDialog.Title>Delete Account</AlertDialog.Title>
                      <AlertDialog.Description>
                        By pressing yes, you all data will be erased permanently.
                      </AlertDialog.Description>

                      <XStack space="$3" justifyContent="flex-end">
                        <AlertDialog.Cancel asChild>
                          <Button>Cancel</Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                          <Button theme="red">Accept</Button>
                        </AlertDialog.Action>
                      </XStack>
                    </YStack>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog>
            );
          }
          return (
            <ListItem
              key={item.id}
              onPress={item.showAlert ? undefined : item.onPress}
              borderWidth={1}
              borderRadius={5}
              hoverTheme
              pressTheme
              icon={<Ionicons name={item.icon} size={24} />}
              iconAfter={<Ionicons name="ios-chevron-forward-outline" size={24} />}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </ScrollView>
      <UserProfile open={openProfileSheet} setOpen={setOpenProfileSheet} />
      <ManageNotifications open={openNotificationSheet} setOpen={setOpenNotificationSheet} />
      <ManageFavorite open={openFavoriteSheet} setOpen={setOpenFavoriteSheet} />
      <AppInfo open={openAppInfoSheet} setOpen={setOpenAppInfoSheet} />
    </MyStack>
  );
};

export default Page;
