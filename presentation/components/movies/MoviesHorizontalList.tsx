import { FlatList, Text, View } from "react-native";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import MoviesPoster from "./MoviesPoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MoviesHorizontalList = ({ title, movies, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviesPoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MoviesHorizontalList;
