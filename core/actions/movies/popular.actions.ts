import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { moviesApi } from "../../api/movie-api";

export const popularMoviesAction = async () => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    //console.log(movies);

    //console.log(JSON.stringify(data, null, 2));
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
