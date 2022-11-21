import React from "react";
import { TouchableOpacity, useWindowDimensions, Image } from "react-native";
import {} from "react";
interface IProps {
  uri: string;
  navigation: any;
  photoId: number;
}
const SquarePhoto: React.FC<IProps> = ({ uri, navigation, photoId }) => {
  const { width } = useWindowDimensions();
  const LinkToDetail = () => {
    navigation.navigate("PhotoDetail", { id: photoId });
  };
  return (
    <TouchableOpacity onPress={LinkToDetail}>
      <Image
        source={{ uri }}
        resizeMode="cover"
        style={{ width: width / 3, height: width / 3.5 }}
      />
    </TouchableOpacity>
  );
};

export default SquarePhoto;
