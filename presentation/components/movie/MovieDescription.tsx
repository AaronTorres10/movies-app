import { Text, View } from "react-native";
import { Formatter } from "../../../config/helpers/formatter";
import { CompleteMovie } from "../../../infrastructure/interfaces/movie.interface";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text
          className="text-normal color-slate-600
        text-xl"
        >
          {movie.rating}
        </Text>
        <Text
          className="text-normal
         color-slate-500 text-xl"
        >
          - {movie.genres.join(", ")}
        </Text>
      </View>
      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2 ">{movie.description}</Text>

      <Text className="font-bold text-2xl mt-2">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
