import { Cast } from "../../../infrastructure/interfaces/cast.interface";
import { MovieDBCreditsResponse } from "../../../infrastructure/interfaces/moviedb-credits.response";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { moviesApi } from "../../api/movie-api";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await moviesApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    const cast = data.cast.map(CastMapper.fromMovieDBCastToEntity);

    return cast;
  } catch (error) {
    console.log(error);
    throw "Cannot load movie cast";
  }
};
