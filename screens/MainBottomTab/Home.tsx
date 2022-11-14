import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinkToMessage } from "../../components/LinkToMessages";
import NavigationFactory from "../../components/NavigationFactory";
const Home = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LinkToMessage navigation={navigation} />,
    });
  }, [navigation]);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PhotoTabNavigation");
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text>Home</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavigationFactory([{ name: "HomPage", component: Home }]);
