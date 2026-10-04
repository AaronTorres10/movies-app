import { Image, Text, View } from "react-native";
import { Cast } from "../../../infrastructure/interfaces/cast.interface";

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mr-4 w-[100px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150px] rounded-2xl"
        resizeMode="cover"
      />

      <Text className="font-bold mt-2" numberOfLines={1}>
        {actor.name}
      </Text>

      <Text className="text-gray-500 text-sm" numberOfLines={2}>
        {actor.character}
      </Text>
    </View>
  );
};

export default ActorCard;
