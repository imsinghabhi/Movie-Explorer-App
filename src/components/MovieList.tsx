
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../features/movies/moviesSelectors';
import { setMovies } from '../features/movies/moviesSlice';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    // Fetch movies from JSON file
    fetch('/movies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setMovies(data));
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const result = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredMovies(result);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
