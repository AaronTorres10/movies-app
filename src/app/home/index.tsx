import { Text, View } from "react-native";
import { useMovies } from "../../../presentation/hooks/useMovie";

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();

  return (
    <View>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
};

export default HomeScreen;
