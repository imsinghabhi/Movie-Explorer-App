
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { Rating } from '../../types/Ratings';
import { RootState } from '../../app/rootReducer';

interface RatingsState {
  ratings: Rating[];
  error: string | null;
}

const initialState: RatingsState = {
  ratings: [],
  error: null,
};

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'movie-explorer',
  storeName: 'ratings',
});

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    addRating(state, action: PayloadAction<Rating>) {
      const newRatings = [...state.ratings, action.payload];
      state.ratings = newRatings;
      localforage.setItem('ratings', newRatings)
        .catch((error) => {
          state.error = `Error saving ratings: ${error.message}`;
        });
      state.error = null;
    },
    loadRatings(state, action: PayloadAction<Rating[]>) {
      state.ratings = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { addRating, loadRatings, clearError } = ratingsSlice.actions;

export const selectRatings = (state: RootState) => state.ratings.ratings;
export const selectRatingsError = (state: RootState) => state.ratings.error;

export default ratingsSlice.reducer;
