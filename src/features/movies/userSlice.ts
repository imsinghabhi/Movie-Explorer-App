
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import localforage from 'localforage';
import { RootState } from '../../app/rootReducer';

interface UserState {
  users: User[];
  error: string | null;
  currentUser: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  users: [],
  error: null,
  currentUser: null,
  isLoggedIn: false,
};

localforage.config({
  driver: localforage.INDEXEDDB, 
  name: 'movie-explorer',
  storeName: 'users',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      if (state.users.length < 5) {
        const newUsers = [...state.users, action.payload];
        state.users = newUsers;
        localforage.setItem('users', newUsers)
          .catch((error) => {
            state.error = `Error saving users: ${error.message}`;
          });
        state.error = null;
      } else {
        state.error = 'User limit reached';
      }
    },
    loadUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      state.isLoggedIn = action.payload !== null;
      if (action.payload) {
        localforage.setItem('currentUser', action.payload)
          .catch((error) => {
            state.error = `Error saving current user: ${error.message}`;
          });
      } else {
        localforage.removeItem('currentUser')
          .catch((error) => {
            state.error = `Error removing current user: ${error.message}`;
          });
      }
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
      localforage.removeItem('currentUser')
        .catch((error) => {
          state.error = `Error removing current user: ${error.message}`;
        });
    },
  },
});

export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout } = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export default userSlice.reducer;
