import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchPopularMovies } from "@/services/api";
import MovieCard from "../components/MovieCard";

const Index = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchPopularMovies({
      query: "",
    }),
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />

      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text className="text-white text-center mt-10">
          Error: {moviesError?.message}
        </Text>
      ) : (
        <FlatList
          data={movies}
          ListHeaderComponent={() => (
            <View className="pt-10">
              <Image
                source={icons.logo}
                className="w-12 h-10 mt-20 mb-6 mx-auto"
              />
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for movies"
              />
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
            </View>
          )}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
          }}
          className="flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default Index;
