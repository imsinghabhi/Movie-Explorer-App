

import { combineReducers } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import userSlice from '../features/movies/userSlice';
import commentsSlice from '../features/movies/commentsSlice';
import ratingsSlice from '../features/movies/ratingsSlice';


const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userSlice,
  comments: commentsSlice,
  ratings: ratingsSlice,

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
