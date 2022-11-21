import React from "react";
import { View, Image, ImageResizeMode } from "react-native";
interface IProps {
  avatarUrl: string | null;
  resizeMode?: ImageResizeMode | undefined;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
}
const Avatar: React.FC<IProps> = ({
  avatarUrl,
  resizeMode = "cover",
  size = "md",
}) => {
  const _size = getSize(size);
  return (
    <View style={{ ..._size }}>
      <Image
        resizeMode={resizeMode}
        source={
          avatarUrl ? { uri: avatarUrl } : require("../assets/noAvatar.jpg")
        }
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 50,
        }}
      />
    </View>
  );
};
export default Avatar;
function getSize(size: any) {
  let parameter = undefined;
  switch (size) {
    case "sm":
      parameter = 20;
      break;
    case "md":
      parameter = 35;
      break;
    case "lg":
      parameter = 40;
      break;
    case "xl":
      parameter = 80;
      break;
    case "xxl":
      parameter = 120;
      break;
    default:
      break;
  }
  if (!parameter) return;
  return {
    width: parameter,
    height: parameter,
  };
}
