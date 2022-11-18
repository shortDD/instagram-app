import { useLazyQuery, useQuery } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { SEE_FEED } from "../../apollo-hooks/apollo-query";
import { LinkToMessage } from "../../components/LinkToMessages";
import Loader from "../../components/Loader";
import NavigationFactory from "../../navigators/NavigationFactory";
import NoData from "../../components/NoData";
import styled from "../../styles";
import { SeeFeed } from "../../__generated__/SeeFeed";
import { ScrollView, RefreshControl } from "react-native";
import { centerScreenHight, height } from "../../constanst";
import Photo from "../../components/Photo/Photo";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Home = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Ionicons name="logo-instagram" size={30} color="black" />
      ),
      headerRight: () => (
        <LinkToMessage navigation={navigation}>
          <Ionicons name="paper-plane" size={26} color="black" />
        </LinkToMessage>
      ),
    });
  }, [navigation]);
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery<SeeFeed>(SEE_FEED);
  const onRefetch = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  if (loading || !data || refreshing) return <Loader />;
  if (!data.seeFeed || data.seeFeed.length < 1) return null;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefetch} refreshing={refreshing} />
      }
    >
      <Container>
        {data.seeFeed.map((photo, index) => (
          <Photo
            key={index}
            file={photo!.file}
            photoId={photo!.id}
            userName={photo!.user.userName}
            caption={photo!.caption}
            createAt={photo!.createAt}
            comments={photo!.comments}
            commentsNumber={photo!.commentsNumber}
            isMine={photo!.isLike}
            isLike={photo!.isLike}
            avatarUrl={photo!.user.avatar}
            likes={photo!.likes}
          />
        ))}
        {data.seeFeed.map((photo, index) => (
          <Photo
            key={index}
            file={photo!.file}
            photoId={photo!.id}
            userName={photo!.user.userName}
            caption={photo!.caption}
            createAt={photo!.createAt}
            comments={photo!.comments}
            commentsNumber={photo!.commentsNumber}
            isMine={photo!.isLike}
            isLike={photo!.isLike}
            avatarUrl={photo!.user.avatar}
            likes={photo!.likes}
          />
        ))}
        {data.seeFeed.map((photo, index) => (
          <Photo
            key={index}
            file={photo!.file}
            photoId={photo!.id}
            userName={photo!.user.userName}
            caption={photo!.caption}
            createAt={photo!.createAt}
            comments={photo!.comments}
            commentsNumber={photo!.commentsNumber}
            isMine={photo!.isLike}
            isLike={photo!.isLike}
            avatarUrl={photo!.user.avatar}
            likes={photo!.likes}
          />
        ))}
      </Container>
    </ScrollView>
  );
};
export default NavigationFactory([{ name: "HomPage", component: Home }]);
