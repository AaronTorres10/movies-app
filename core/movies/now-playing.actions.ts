import { MovieDBMoviesResponse } from "../../infrastructure/interfaces/moviedb-response";
import { moviesApi } from "../api/movie-api";

export const nowPlayingAction = async () => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>("/now_playing");

    //console.log(JSON.stringify(data, null, 2));
    return [];
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movie";
  }
};
