import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { MyTheme } from "../../styles";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { SeeFeed_seeFeed_comments } from "../../__generated__/SeeFeed";
import { Ionicons } from "@expo/vector-icons";
import LikeIconAction from "../IconActions/toggleLike";
import RoomIconAcion from "../IconActions/room";
import DownloadIconAcion from "../IconActions/download";
import ShareIconAcion from "../IconActions/share";
import MarkIconAcion from "../IconActions/mark";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import PostComment from "../comment/post-comment";
import { getDateTime } from "../../utils/date";
import Avatar from "../Avatar";
import Comment from "../comment/comment";
import { useQuery } from "@apollo/client";
import { SEE_PHOTOLIKES } from "../../apollo-hooks/apollo-query";
import {
  SeePhotoLikes,
  SeePhotoLikesVariables,
} from "../../__generated__/SeePhotoLikes";
import PagerView from "react-native-pager-view";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { headerHeight } from "../../constanst";
import LinkToProfile from "../LinkToProfile";

const PhotoContainer = styled.View`
  flex: 1;
  width: 100%;
`;
const PhotoHeader = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0.4;
  min-height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.lightGray};
`;
const PhotoHeaderLeft = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const PhotoHeaderRight = styled.TouchableOpacity``;
const Username = styled.Text`
  margin-left: 10px;
  font-weight: 600;
  font-size: 16px;
`;

const PhotoCenter = styled.View`
  flex: 5;
`;
const PhotoFooter = styled.View`
  flex: 4;
`;
const IconAction = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;
const IconActionLeft = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: -4px;
`;
const IconActionRight = styled.View``;
const Likers = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Comments = styled.View`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
`;
const GrayText = styled.Text`
  color: gray;
`;
const NoCommentTips = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
interface IProps {
  files: string[];
  userName: string;
  photoId: number;
  isMine: boolean;
  isLike: boolean;
  commentsNumber?: number;
  caption: string;
  comments: (SeeFeed_seeFeed_comments | null)[] | null;
  createAt: string;
  avatarUrl: string | null;
  likes: number;
}
const Photo: React.FC<IProps> = ({
  files,
  userName,
  photoId,
  isLike,
  isMine,
  commentsNumber,
  caption,
  comments,
  createAt,
  avatarUrl,
  likes,
}) => {
  //获取正文高度
  const bottomTabHeight = useBottomTabBarHeight();
  const frame = useSafeAreaFrame();
  const { top, bottom } = useSafeAreaInsets();
  const omitedHeight = frame.height - top - headerHeight - bottomTabHeight;
  const [photoHeight, setPhotoHeight] = useState(omitedHeight);
  //屏幕高度发生变化时 重新计算正文高度
  useEffect(() => {
    setPhotoHeight(frame.height - top - headerHeight - bottomTabHeight);
  }, [frame]);
  const { data } = useQuery<SeePhotoLikes, SeePhotoLikesVariables>(
    SEE_PHOTOLIKES,
    {
      variables: { seePhotoLikesId: photoId },
    }
  );
  const [commentLimitNums, setCommentLimitNums] = useState<number>(0);
  const _layout = useCallback((e: any) => {
    const { height } = e.nativeEvent.layout;
    const commentLimitNums = Math.floor(height / 23);
    setCommentLimitNums(commentLimitNums);
  }, []);
  return (
    <PhotoContainer style={{ height: photoHeight }}>
      {/* 图片头部
          作者信息
      */}
      <PhotoHeader>
        <PhotoHeaderLeft>
          <LinkToProfile userName={userName}>
            <Avatar
              avatarUrl={avatarUrl}
              size={omitedHeight > 500 ? "md" : "sm"}
            />
          </LinkToProfile>
          <LinkToProfile userName={userName}>
            <Username>{userName}</Username>
          </LinkToProfile>
        </PhotoHeaderLeft>
        <PhotoHeaderRight>
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={MyTheme.blackColor}
          />
        </PhotoHeaderRight>
      </PhotoHeader>
      {/* 图片*/}
      <PhotoCenter>
        <PagerView style={{ flex: 1 }} initialPage={0}>
          {files.map((file, index) => (
            <Image
              key={index + 1}
              resizeMode="repeat"
              source={{ uri: file }}
              style={{ width: "100%", height: "100%" }}
            />
          ))}
        </PagerView>
      </PhotoCenter>
      {/* 图片底部
          图标操作区
          点赞区
          评论区
          提交评论
      */}
      <PhotoFooter>
        {/* 图标操作区*/}
        <IconAction>
          <IconActionLeft>
            <LikeIconAction isLike={isLike} photoId={photoId} />
            <RoomIconAcion />
            <DownloadIconAcion />
            <ShareIconAcion />
          </IconActionLeft>
          <IconActionRight>
            <MarkIconAcion />
          </IconActionRight>
        </IconAction>
        {/* 点赞区*/}
        <Likers>
          <Text style={{ color: "gray", marginRight: 10, fontSize: 14 }}>
            {likes} likes
          </Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            {data?.seePhotoLikes &&
              data.seePhotoLikes.length > 0 &&
              data?.seePhotoLikes.map((liker, index) => (
                <LinkToProfile userName={liker!.userName} key={index}>
                  <Avatar avatarUrl={liker!.avatar} size="sm" />
                </LinkToProfile>
              ))}
          </View>
        </Likers>
        {/* 评论区*/}
        <Comments>
          <Comment
            userName={userName}
            playload={caption}
            isMine={isMine}
            isCaption={true}
          />

          {Boolean(commentsNumber) && commentsNumber! > 2 && (
            <TouchableOpacity>
              <Text style={{ color: "gray", marginBottom: 2, marginTop: 2 }}>
                show all comments
              </Text>
            </TouchableOpacity>
          )}
          {comments && comments.length > 0 ? (
            <View
              onLayout={_layout}
              style={{
                flex: 1,
              }}
            >
              {comments.map((comment, index) => {
                if (index < commentLimitNums) {
                  return (
                    <Comment
                      key={index}
                      userName={comment!.user.userName}
                      playload={comment!.playload}
                      isMine={comment!.isMine}
                    />
                  );
                }
              })}
            </View>
          ) : (
            <NoCommentTips>
              <GrayText>暂无评论....</GrayText>
            </NoCommentTips>
          )}
        </Comments>
        {/* 提交评论*/}
        <View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 5 }}>
          <GrayText style={{ textAlign: "right" }}>
            {getDateTime(createAt)}
          </GrayText>
        </View>
        <PostComment photoId={photoId} playload={"heelo"} />
      </PhotoFooter>
    </PhotoContainer>
  );
};

export default Photo;
