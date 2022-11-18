import React from "react";
import styled, { MyTheme } from "../../styles";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { SeeFeed_seeFeed_comments } from "../../__generated__/SeeFeed";
import { Ionicons } from "@expo/vector-icons";
import LikeIconAction from "../IconActions/toggleLike";
import RoomIconAcion from "../IconActions/room";
import DownloadIconAcion from "../IconActions/download";
import ShareIconAcion from "../IconActions/share";
import MarkIconAcion from "../IconActions/mark";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { height } from "../../constanst";
import PostComment from "../comment/post-comment";

const PhotoContainer = styled.View`
  flex: 1;
  align-content: center;
  width: 100%;
  position: relative;
`;
const PhotoHeader = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  flex: 7;
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
const Avatar = styled.View`
  width: 35px;
  height: 35px;
`;
const PhotoCenter = styled.View`
  flex: 60;
`;
const PhotoFooter = styled.View`
  flex: 33;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 80px;
`;
const IconAction = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const IconActionLeft = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: -4px;
`;
const IconActionRight = styled.View``;
const Likers = styled.View``;
const Comments = styled.View`
  flex: 1;
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
  file: string;
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
  file,
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
  const bottomTabHeight = useBottomTabBarHeight();
  const omitedHeight = height - 45 - bottomTabHeight;
  return (
    <PhotoContainer style={{ height: omitedHeight }}>
      {/* 图片头部
          作者信息
      */}
      <PhotoHeader>
        <PhotoHeaderLeft>
          <Avatar>
            <Image
              resizeMode="contain"
              source={
                avatarUrl
                  ? { uri: avatarUrl }
                  : require("../../assets/noAvatar.jpg")
              }
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />
          </Avatar>
          <Username>{userName}</Username>
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
        <Image
          resizeMode="repeat"
          source={{ uri: file }}
          style={{ width: "100%", height: "100%" }}
        />
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
        <Text style={{ color: "gray", marginBottom: 5 }}>{likes} likes</Text>
        {/* 评论区*/}
        <Comments>
          {Boolean(commentsNumber) && commentsNumber! > 2 && (
            <TouchableOpacity>
              <Text style={{ color: "gray", marginBottom: 5 }}>
                show all comments
              </Text>
            </TouchableOpacity>
          )}
          {comments && comments.length > 0 ? (
            <Text>存在</Text>
          ) : (
            <NoCommentTips>
              <GrayText>暂无评论....</GrayText>
            </NoCommentTips>
          )}
        </Comments>
        {/* 提交评论*/}
      </PhotoFooter>
      <PostComment photoId={photoId} playload={"heelo"} />
    </PhotoContainer>
  );
};

export default Photo;
