import { CompleteMovie } from "../../../infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "../../../infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { moviesApi } from "../../api/movie-api";

export const getMovieByIdAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await moviesApi.get<MovieDBMovieResponse>(`${id}`);
    //const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    //console.log(data);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
