

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/comments';
import localforage from 'localforage';
import { RootState } from '../../app/rootReducer';

interface CommentsState {
  comments: Comment[];
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  error: null,
};

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'movie-explorer',
  storeName: 'comments',
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      const newComments = [...state.comments, action.payload];
      state.comments = newComments;
      localforage.setItem('comments', newComments)
        .catch((error) => {
          state.error = `Error saving comments: ${error.message}`;
        });
      state.error = null;
    },
    loadComments(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { addComment, loadComments, clearError } = commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsError = (state: RootState) => state.comments.error;

export default commentsSlice.reducer;
