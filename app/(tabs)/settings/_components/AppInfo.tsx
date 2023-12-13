import { Ionicons } from '@expo/vector-icons';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Button, H2, H3, H4, H5, ScrollView, Sheet, SizableText, YStack } from 'tamagui';

interface AppInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AppInfo: FC<AppInfoProps> = ({ open, setOpen }) => {
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
        <Sheet.Frame p="$4" space="$5">
          <Button
            onPress={() => setOpen(false)}
            unstyled
            icon={<Ionicons name="ios-chevron-back-outline" size={24} />}
          />
          <ScrollView showsVerticalScrollIndicator={false} space="$5">
            <H3>OtakuSphere - Your Anime Universe</H3>
            <SizableText>
              Welcome to OtakuSphere, your gateway to a universe of captivating anime adventures!
              Immerse yourself in the world of Japanese animation with our feature-packed anime app.
            </SizableText>

            <YStack space="$4">
              <H4>About OtakuSphere</H4>
              <YStack space="$3">
                <SizableText>
                  OtakuSphere is more than just an app; it's a community-driven platform designed
                  for anime lovers by anime lovers. Our mission is to provide a dedicated space for
                  fans to discover, share, and celebrate the incredible world of anime.
                </SizableText>
                <SizableText>
                  Download OtakuSphere now and embark on an anime journey like never before! Join
                  our community of passionate fans and make OtakuSphere your go-to destination for
                  all things anime.
                </SizableText>
              </YStack>
              <H4>Key Features:</H4>
              <YStack space="$3">
                <SizableText>
                  <H5>1. Explore Animes:</H5> Dive into a vast collection of animes, ranging from
                  timeless classics to the latest releases. Discover a world of diverse genres, from
                  action-packed shonen to heartwarming slice-of-life.
                </SizableText>
                <SizableText>
                  <H5>2. Search & Discover:</H5> Use our powerful search feature to find your
                  favorite animes or explore new ones. Our intuitive search makes it easy to uncover
                  hidden gems and must-watch series.
                </SizableText>
                <SizableText>
                  <H5>3. Browse by Genre:</H5> Explore animes based on your preferred genres.
                  Whether you're a fan of fantasy, romance, or mystery, OtakuSphere has something
                  for every anime enthusiast.
                </SizableText>
                <SizableText>
                  <H5>4. Favorite Management:</H5> Build your personalized anime list by adding your
                  favorites to your collection. Easily manage and revisit the animes that resonate
                  with you the most.
                </SizableText>
              </YStack>

              <H4>Why OtakuSphere?</H4>
              <YStack space="$3" mb="$10">
                <SizableText>
                  <H5>1. User-Friendly Interface:</H5> Navigating OtakuSphere is a breeze with our
                  user-friendly interface. Enjoy a seamless and intuitive experience as you explore
                  the world of anime.
                </SizableText>
                <SizableText>
                  <H5>2. Stay Updated:</H5> Stay in the loop with the latest anime releases and
                  updates. OtakuSphere keeps you informed about upcoming series, events, and
                  exclusive content.
                </SizableText>
                <SizableText>
                  <H5>3. Community Engagement:</H5> Connect with fellow anime enthusiasts in our
                  vibrant community. Share your thoughts, recommendations, and engage in discussions
                  with like-minded fans.
                </SizableText>
                <SizableText>
                  <H5>4. Customizable Preferences:</H5> Tailor your OtakuSphere experience with
                  customizable preferences. Set your favorite genres, receive personalized
                  recommendations, and make OtakuSphere truly yours.
                </SizableText>
              </YStack>
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </ScrollView>
  );
};

export default AppInfo;
