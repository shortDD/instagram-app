import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import styled from "../../styles";
import { SEARCH_PHOTOS } from "../../apollo-hooks/apollo-query";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import NavigationFactory from "../../navigators/NavigationFactory";
import {
  searchPhoto,
  searchPhotoVariables,
} from "../../__generated__/searchPhoto";
import SquarePhoto from "../../components/Photo/SquarePhoto";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Search = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [searchPhoto, { loading, data: searchPhotoResult }] = useLazyQuery<
    searchPhoto,
    searchPhotoVariables
  >(SEARCH_PHOTOS, { fetchPolicy: "network-only" });
  const onSearch = () => {
    if (loading || refreshing || !value) return;
    try {
      setRefreshing(true);
      searchPhoto({
        variables: {
          keyword: value,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <SearchBar value={value} onChange={setValue} onSubmit={onSearch} />
      ),
    });
  }, [value]);
  if (loading || refreshing) return <Loader />;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onSearch} refreshing={refreshing} />
      }
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Container>
        {!searchPhotoResult || !searchPhotoResult.searchPhoto.length ? (
          <Text>没有相关联的图片</Text>
        ) : (
          searchPhotoResult!.searchPhoto.map((photo, index) => (
            <SquarePhoto
              key={index}
              uri={photo!.files![0] as string}
              navigation={navigation}
              photoId={photo!.id}
            />
          ))
        )}
      </Container>
    </ScrollView>
  );
};

export default NavigationFactory([{ name: "SearchPage", component: Search }]);
