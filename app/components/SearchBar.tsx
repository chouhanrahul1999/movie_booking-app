import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchProp {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchProp) => {
  return (
    <View>
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-3">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />

        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          value=""
          onChangeText={() => {}}
          placeholderTextColor="#a8b5db"
          className="flex-1 ml-2 text-white"
        />
      </View>
    </View>
  );
};

export default SearchBar;
