import { FlatList, Text, View } from "react-native";

import { Cast } from "../../../infrastructure/interfaces/cast.interface";
import ActorCard from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5">
      <Text className="text-2xl font-bold mb-3 px-5">Actores</Text>

      <FlatList
        horizontal
        data={cast}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
