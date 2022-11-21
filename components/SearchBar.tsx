import React from "react";
import { useWindowDimensions } from "react-native";
import { width } from "../constanst";
import styled from "../styles";
const TextInput = styled.TextInput`
  border: 1px solid;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  border-color: ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.borderGray};
`;
interface IProp {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}
const SearchBar: React.FC<IProp> = ({ value, onChange, onSubmit }) => {
  const { width } = useWindowDimensions();

  return (
    <TextInput
      placeholder="Search"
      onChangeText={onChange}
      onEndEditing={onSubmit}
      returnKeyType="search"
      selectionColor="black"
      value={value}
      style={{ width: width - 60 }}
    />
  );
};

export default SearchBar;
