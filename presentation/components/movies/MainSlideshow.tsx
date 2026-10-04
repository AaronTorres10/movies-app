import { useWindowDimensions, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import MoviesPoster from "./MoviesPoster";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View className="h-[250px] w-full">
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <MoviesPoster id={item.id} poster={item.poster} />
        )}

        style={{
          width,
          height: 350,
        }}

        itemSize={165}

        layout={{
          type: "parallax",
          scale: 0.9,
          offset: 30,
        }}

        defaultIndex={1}
        loop={true}
      />
    </View>
  );
};

export default MainSlideshow;
