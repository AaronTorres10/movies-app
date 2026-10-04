import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideshow from "../../../presentation/components/movies/MainSlideshow";
import MoviesHorizontalList from "../../../presentation/components/movies/MoviesHorizontalList";
import { useMovies } from "../../../presentation/hooks/useMovie";

const HomeScreen = () => {
  const SafeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: SafeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
      <MoviesHorizontalList
        title="Populares"
        movies={popularQuery.data ?? []}
      />
    </View>
  );
};
export default HomeScreen;
