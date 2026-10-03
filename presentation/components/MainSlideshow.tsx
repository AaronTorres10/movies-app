import { Text, useWindowDimensions, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import { Movie } from "../../infrastructure/interfaces/movie.interface";

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View className="h-[350px] w-full">
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <View className="flex-1 items-center justify-center">
            <Text>{item.title}</Text>
          </View>
        )}

        style={{
          width,
          height: 350,
        }}

        itemSize={180}

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
