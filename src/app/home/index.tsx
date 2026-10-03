import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideshow from "../../../presentation/components/MainSlideshow";
import { useMovies } from "../../../presentation/hooks/useMovie";

const HomeScreen = () => {
  const SafeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: SafeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};
export default HomeScreen;
