import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
const LinkToProfile = ({
  children,
  userName,
}: {
  children: any;
  userName: string;
}) => {
  const navigation = useNavigation<any>();
  const linkToProfile = () => {
    navigation.navigate("Profile", { userName });
  };
  return (
    <TouchableOpacity onPress={linkToProfile}>{children}</TouchableOpacity>
  );
};

export default LinkToProfile;
