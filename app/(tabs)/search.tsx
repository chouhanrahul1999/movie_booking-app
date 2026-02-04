import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import MovieCard from "../components/MovieCard";
import { icons } from "@/constants/icons";
import SearchBar from "../components/SearchBar";
import { updatedSearchCount } from "@/lib/appwrite";
// import { updatedSearchCount } from "@/lib/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
  } = useFetch(
    () =>
      fetchPopularMovies({
        query: searchQuery,
      }),
    false,
  );

  useEffect(() => {
    if (searchQuery.trim() && movies && movies.length > 0) {
      updatedSearchCount(searchQuery, movies[0]).catch(console.error);
    }
  }, [movies, searchQuery]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        refetch();
      } else {
        reset();
      }
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className="px-5 pt-10"
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 16,
          marginVertical: 8,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 text-center my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Showing results for{" "}
                <Text className="text-white-50 uppercase">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <Text className="text-white text-center my-10">
              {searchQuery.trim()
                ? `No movies found for "${searchQuery}`
                : "Search for movie"}
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
