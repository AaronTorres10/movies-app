import { useQuery } from "@tanstack/react-query";
import { getMovieByIdAction } from "../../core/actions/movie/get-movie-by-id.actions";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id], //si da error quitar la s de "movies"
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
  };
};
