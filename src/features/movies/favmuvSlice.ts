// features/movies/favoriteMoviesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { RootState } from '../../app/rootReducer';// Update the path as per your project structure
import { Movie } from '../../types/User';

// Define a type for the slice state
interface FavoriteMoviesState {
  favoriteMovies: Movie[];
}

// Define the initial state
const initialState: FavoriteMoviesState = {
  favoriteMovies: [],
};

// Initialize localforage instance
const favoriteMoviesStorage = localforage.createInstance({
  name: 'favoriteMovies',
});

// Fetch initial state from localforage if available
favoriteMoviesStorage.getItem<Movie[]>('favoriteMovies').then((movies) => {
  if (movies) {
    initialState.favoriteMovies = movies;
  }
});

// Create a slice
const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action.payload);
      favoriteMoviesStorage.setItem('favoriteMovies', state.favoriteMovies);
    },
    removeFavoriteMovie: (state, action: PayloadAction<string>) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      favoriteMoviesStorage.setItem('favoriteMovies', state.favoriteMovies);
    },
  },
});

// Export actions
export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMoviesSlice.actions;

// Export reducer
export default favoriteMoviesSlice.reducer;

// Selectors
// export const selectFavoriteMovies = (state: RootState) => state.favoriteMovies.favoriteMovies;
