
import { RootState } from '../../app/rootReducer';
import { Movie } from '../../types/Movie';

export const selectMovies = (state: RootState): Movie[] => {
  const { movies, searchQuery } = state.movies;
  return searchQuery
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;
};

export const selectFavoriteMovies = (state: RootState): Movie[] =>
  state.movies.favoriteMovies;
