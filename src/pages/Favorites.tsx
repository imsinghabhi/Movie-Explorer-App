
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from '../features/movies/moviesSelectors';
import MovieCard from '../components/MovieCard';

const Favorites: React.FC = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);
  console.log(favoriteMovies,"fav")

  return (
    <div>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
