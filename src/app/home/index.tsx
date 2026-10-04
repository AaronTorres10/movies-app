import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideshow from "../../../presentation/components/movies/MainSlideshow";
import MoviesHorizontalList from "../../../presentation/components/movies/MoviesHorizontalList";
import { useMovies } from "../../../presentation/hooks/useMovies";

const HomeScreen = () => {
  const SafeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: SafeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        <MoviesHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />
        <MoviesHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <MoviesHorizontalList
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
        <MoviesHorizontalList
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
