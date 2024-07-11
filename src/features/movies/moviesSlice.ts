

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Movie } from '../../types/Movie';

// interface MoviesState {
//   movies: Movie[];
//   favoriteMovies: Movie[];
//   searchQuery: string;
// }

// const initialState: MoviesState = {
//   movies: [],
//   favoriteMovies: [],
//   searchQuery: '',
// };

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     setMovies(state, action: PayloadAction<Movie[]>) {
//       state.movies = action.payload;
//     },
//     addFavorite(state, action: PayloadAction<Movie>) {
//       state.favoriteMovies.push(action.payload);
//     },
//     removeFavorite(state, action: PayloadAction<string>) {
//       state.favoriteMovies = state.favoriteMovies.filter(
//         (movie) => movie.imdbID !== action.payload
//       );
//     },
//     setSearchQuery(state, action: PayloadAction<string>) {
//       state.searchQuery = action.payload.trim().toLowerCase(); // Ensure lowercase and trim whitespace
//     },
//   },
// });

// export const { setMovies, addFavorite, removeFavorite, setSearchQuery } = moviesSlice.actions;
// export default moviesSlice.reducer;




import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/Movie';


interface MoviesState {
  movies: Movie[];
  favoriteMovies: Movie[];
  searchQuery: string;
}

const initialState: MoviesState = {
  movies: [],
  favoriteMovies: [],
  searchQuery: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
   
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload.trim().toLowerCase(); 
    },
    loadFavorites(state, action: PayloadAction<Movie[]>) {
      state.favoriteMovies = action.payload;
    },
  },
});

export const { setMovies, setSearchQuery, loadFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
