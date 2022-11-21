import { useQuery } from "@apollo/client";
import React from "react";
import { View, Text } from "react-native";
import { SEE_PHOTO } from "../../apollo-hooks/apollo-query";
import Photo from "../../components/Photo/Photo";
import { Container } from "../BottomTab/Home";

const PhotoDetail = ({ route }: { route: any }) => {
  const id = route.params.id;
  const {} = useQuery(SEE_PHOTO);
  return (
    <Container>
      <Photo
        files={[]}
        userName={""}
        photoId={0}
        isMine={false}
        isLike={false}
        caption={""}
        comments={null}
        createAt={""}
        avatarUrl={null}
        likes={0}
      />
    </Container>
  );
};

export default PhotoDetail;
