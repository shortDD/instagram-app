import { gql } from "@apollo/client";
import { USER_FRAMENT } from "./fragments";

export const SEE_FEED = gql`
  query SeeFeed {
    seeFeed {
      file
      createAt
      id
      isLike
      isMine
      likes
      caption
      user {
        ...UserParts
      }
      commentsNumber
      comments {
        isMine
        playload
        id
        user {
          ...UserParts
        }
      }
    }
  }
  ${USER_FRAMENT}
`;
